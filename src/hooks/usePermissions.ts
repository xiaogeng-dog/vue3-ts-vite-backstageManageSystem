import useLoginStore from '@/store/login/login'

function usePermissions(pageName: string, handle?: string) {
  const loginStore = useLoginStore()
  const { permissions } = loginStore
  let handlePermission = ''
  if (arguments.length == 2) {
    handlePermission = `${pageName}:${handle}`
  } else {
    handlePermission = pageName
  }

  return !!permissions.find((item) => item.includes(handlePermission))
}

export default usePermissions
