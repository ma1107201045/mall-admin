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
  indexWidth: 55,
  menuWidth: 280,
  labelWidth: 130,
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
  rowKey: 'id',
  rowParentKey: 'parentId',
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
      label: '菜单名称',
      prop: 'name',
      width: 200,
      rules: [
        {
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '类型',
      prop: 'type',
      dicData: [
        {
          label: '目录',
          value: 1
        },
        {
          label: '菜单',
          value: 2
        },
        {
          label: '按钮',
          value: 3
        }
      ],
      slot: true,
      type: 'select',
      rules: [
        {
          required: true,
          message: '请输入类型',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '图标',
      prop: 'icon',
      slot: true
    },
    {
      label: '角色顺序',
      prop: 'sort',
      rules: [
        {
          required: true,
          message: '请输入菜单顺序',
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
      label: '创建人',
      prop: 'createBy',
      overHidden: true,
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
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '最后修改时间',
      prop: 'lastModifyDateTime',
      hide: true,
      addDisplay: false,
      editDisplay: false
    }
  ]
}
