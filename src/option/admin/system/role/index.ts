export default {
  index: true,
  border: true,
  stripe: true,
  delBtn: false,
  viewBtn: true,
  copyBtn: true,
  printBtn: true,
  excelBtn: true,
  sortable: true,
  selection: true,
  menuWidth: 280,
  indexWidth: 55,
  labelWidth: 130,
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
  rowKey: 'id',
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
      ]
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
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
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
      type: 'radio',
      value: 1
    },
    {
      label: '备注',
      prop: 'remark'
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
      filterable: true,
      multiple: true,
      checked: null
    },
    {
      label: '创建人',
      prop: 'createBy',
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '创建时间',
      prop: 'createDateTime',
      width: 155,
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '最后修改人',
      prop: 'lastModifyBy',
      hide: true,
      labelWidth: '100',
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '最后修改时间',
      prop: 'lastModifyDateTime',
      hide: true,
      labelWidth: '110',
      addDisplay: false,
      editDisplay: false
    }
  ]
}
