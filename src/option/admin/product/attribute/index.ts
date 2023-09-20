export default {
  index: true,
  border: true,
  stripe: true,
  delBtn: false,
  editBtn: false,
  viewBtn: true,
  copyBtn: true,
  printBtn: true,
  excelBtn: true,
  sortable: true,
  selection: true,
  menuWidth: 290,
  indexWidth: 60,
  labelWidth: 130,
  rowKey: 'id',
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
  updateBtnText: '更新',
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
      search: true,
      rules: [
        {
          required: true,
          message: '请输入品牌名称',
          trigger: 'blur'
        }
      ],
      maxlength: 20,
      showWordLimit: true
    },
    {
      label: '属性值',
      prop: 'attributeValues',
      rules: [
        {
          required: true,
          message: '请输入属性值称',
          trigger: 'blur'
        }
      ],
      maxlength: 20,
      showWordLimit: true
    },
    {
      label: '创建人',
      prop: 'createBy',
      hide: true,
      overHidden: true,
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '创建时间',
      prop: 'createDateTime',
      hide: true,
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '最后修改人',
      prop: 'lastModifyBy',
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '最后修改时间',
      prop: 'lastModifyDateTime',
      addDisplay: false,
      editDisplay: false
    }
  ]
}
