<template>
  <div class="hy-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in breadcrumbs" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { IBreadcrumb } from '../types'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
