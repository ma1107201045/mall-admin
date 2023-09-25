export default {
  index: true,
  border: true,
  stripe: true,
  addBtn: false,
  delBtn: false,
  editBtn: false,
  viewBtn: false,
  copyBtn: false,
  printBtn: false,
  excelBtn: false,
  sortable: false,
  menu: false,
  selection: true,
  rowKey: 'id',
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
  indexWidth: 60,
  column: [
    {
      label: '主键id',
      prop: 'id',
      hide: true,
      disabled: true,
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '属性名称',
      prop: 'name',
      overHidden: true,
      search: true
    },
    {
      label: '属性值',
      prop: 'attributeValueNames',
      slot: true,
      type: 'array'
    }
  ]
}
