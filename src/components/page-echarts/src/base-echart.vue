<template>
  <div class="base-echart">
    <div ref="echartRef" class="echart" style="width: 100%; height: 350px"></div>
  </div>
</template>

<script setup lang="ts" name="base-echart">
import { onMounted, ref, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import ChinaJSON from '../data/china.json'

// 注册地图
echarts.registerMap('china', ChinaJSON as any)

interface IProps {
  options: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLDivElement>()
onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light', { renderer: 'canvas' })
  watchEffect(() => {
    echartInstance.setOption(props.options)
  })
})
</script>

<style scoped lang="less"></style>
