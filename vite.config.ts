import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//element-plus样式按需导入
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 mode 加载 .env 又件
  // 设置第三个参数为·来加载所有环境变量，而不管是否有VITE_ 前缀
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV
    },
    server: {
      // http://localhost:5173/api/login -> http://www.test.com/login
      proxy: {
        //api是自行设置的请求前缀，任何请求路径以/api开头的请求将被代理到对应的target目标
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE, //目标域名
          changeOrigin: true, //需要代理跨域
          rewrite: (path) => path.replace(env.VITE_APP_BASE_API, '') //路径重写，把'/api'替换为''
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        // 生成自动导入的TS声明文件
        // dts: './auto-imports.d.ts',
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ],
        eslintrc: {
          enabled: false // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
        }
      }),
      Components({
        // 指定自动导入的组件位置，默认是 src/components
        dirs: ['src/components', 'src/otherComponents'],
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'] //@iconify-json/ep 是 Element Plus 的图标库，所以 IconsResolver 配置了 enabledCollections: ['ep']
          })
        ]
      }),
      Icons({
        autoInstall: true
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/theme-chalk/${name}.css`
            }
          }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
