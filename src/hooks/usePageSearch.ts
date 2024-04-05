import { ref } from 'vue'
import PageContent from '@/components/page-content/page-content.vue'

export const usePageSearch = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleQueryClick = (queryInfo: any) => {
    console.log(pageContentRef.value)
    pageContentRef.value?.fetchPageListData(queryInfo)
  }
  const handleResetClick = () => {
    pageContentRef.value?.fetchPageListData()
  }

  return [pageContentRef, handleQueryClick, handleResetClick]
}
