export default {
  index: true,
  border: true,
  stripe: true,
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
  editBtnText: '修改',
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
      label: '角色名称',
      prop: 'name',
      overHidden: true,
      search: true,
      rules: [
        {
          required: true,
          message: '请输入角色名称',
          trigger: 'blur'
        }
      ],
      maxlength: 20,
      showWordLimit: true
    },
    {
      label: '角色顺序',
      prop: 'sort',
      rules: [
        {
          required: true,
          message: '请输入角色顺序',
          trigger: 'blur'
        }
      ],
      type: 'number',
      value: 0,
      min: 0,
      max: 2147483647,
      controlsPosition: 'left'
    },
    {
      label: '是否启用',
      prop: 'isEnable',
      dicData: [
        {
          label: '否',
          value: 0
        },
        {
          label: '是',
          value: 1
        }
      ],
      slot: true,
      rules: [
        {
          required: true,
          message: '请选择是否启用',
          trigger: 'blur'
        }
      ],
      type: 'switch',
      value: 1
    },
    {
      label: '备注',
      prop: 'remark',
      maxlength: 200,
      showWordLimit: true
    },
    {
      label: '菜单',
      prop: 'menuIds',
      hide: true,
      props: {
        label: 'name',
        value: 'id',
        children: 'children'
      },
      dicData: [],
      rules: [
        {
          required: true,
          message: '请选择菜单',
          trigger: 'blur'
        }
      ],
      type: 'tree',
      row: true,
      filterable: true,
      multiple: true
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
