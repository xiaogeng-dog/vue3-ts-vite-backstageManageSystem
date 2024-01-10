import { ref } from 'vue'
import type PageModal from '@/components/page-modal/page-modal.vue'

type CallbackFnType = (data?: any) => void

function usePageModal(newCallback?: CallbackFnType, editCallback?: CallbackFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewClick() {
    modalRef.value?.setDialogVisible()
    if (newCallback) newCallback()
  }
  function handleEditClick(itemData: any) {
    // 1.让modal显示出来
    modalRef.value?.setDialogVisible(false, itemData)
    // 2.编辑的回调
    if (editCallback) editCallback(itemData)
  }

  return { modalRef, handleNewClick, handleEditClick }
}

export default usePageModal
