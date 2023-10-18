export default {
  index: true,
  selection: true,
  border: true,
  stripe: true,
  addBtn: false,
  editBtn: false,
  viewBtn: true,
  printBtn: true,
  excelBtn: true,
  sortable: true,
  labelWidth: 130,
  indexWidth: 60,
  indexLabel: '序号',
  align: 'center',
  headerAlign: 'center',
  rowKey: 'id',
  loadingText: '加载中...',
  column: [
    {
      label: '主键id',
      prop: 'id',
      hide: true
    },
    {
      label: '备注',
      prop: 'remark',
      hide: true
    },
    {
      label: '创建人',
      prop: 'createBy',
      hide: true,
      overHidden: true
    },
    {
      label: '创建时间',
      prop: 'createDateTime',
      hide: true
    },
    {
      label: '最后修改人',
      prop: 'lastModifyBy',
      overHidden: true
    },
    {
      label: '最后修改时间',
      prop: 'lastModifyDateTime'
    }
  ]
}
