<template>
  <div class="app">
    <el-config-provider :locale="zhCn"> <RouterView /></el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
