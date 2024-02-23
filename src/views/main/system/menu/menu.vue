<template>
  <div class="menu">
    <page-content
      :content-config="contentConfig"
      @new-data-click="handleNewClick"
      @edit-data-click="handleEditClick"
      ref="contentRef"
    />

    <!-- <page-modal :modal-config="modalConfigRef" ref="modalRef" /> -->
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'

import usePageModal from '@/hooks/usePageModal'

// 点击content, modal的操作
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>

<style scoped>
.menu {
}
</style>
