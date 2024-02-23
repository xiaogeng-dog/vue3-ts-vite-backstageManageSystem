export const contentTableConfig = {
  pageName: 'department',
  header: {
    title: '类别列表',
    btnTitle: '新建类别'
  },
  propsList: [
    { prop: 'name', label: '角色名称', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'create' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'update' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
