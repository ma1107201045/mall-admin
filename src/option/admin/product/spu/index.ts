export default {
  index: true,
  border: true,
  stripe: true,
  addBtn: false,
  delBtn: false,
  editBtn: false,
  sortable: false,
  selection: true,
  menuWidth: 290,
  indexWidth: 60,
  labelWidth: 140,
  rowKey: 'id',
  rowParentKey: 'parentId',
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
  updateBtnText: '更新',
  loadingText: '加载中...',
  column: [
    {
      label: '主键id',
      prop: 'id',
      hide: true,
      disabled: true,
      addDisplay: false,
      editDisplay: false
    }
  ]
}
