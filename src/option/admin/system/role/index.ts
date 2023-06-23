export default {
  index: true,
  indexLabel: '序号',
  indexWidth: 55,
  border: true,
  stripe: true,
  delBtn: false,
  viewBtn: true,
  printBtn: true,
  excelBtn: true,
  sortable: true,
  align: 'center',
  headerAlign: 'center',
  rowKey: 'id',
  labelWidth: 150,
  labelPosition: 'right',
  selection: true,
  column: [
    {
      label: '主键id',
      prop: 'id',
      hide: true,
      disabled: true
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
          message: '请选择角色顺序',
          trigger: 'blur'
        }
      ],
      type: 'number',
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
      hide: true,
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
      drag: true,
      multiple: true,
      checked: null
    },
    {
      label: '创建人',
      prop: 'createBy',
      disabled: true
    },
    {
      label: '创建时间',
      prop: 'createDateTime',
      width: 180,
      disabled: true
    },
    {
      label: '最后修改人',
      prop: 'lastModifyBy',
      hide: true,
      labelWidth: '100',
      disabled: true
    },
    {
      label: '最后修改时间',
      prop: 'lastModifyDateTime',
      hide: true,
      labelWidth: '110',
      disabled: true
    }
  ]
}
