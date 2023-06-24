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
  selectable: row => {
    return row.userName !== 'admin'
  },
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
      label: '用户名称',
      prop: 'userName',
      overHidden: true,
      search: true,
      rules: [
        {
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '密码',
      prop: 'password',
      hide: true,
      type: 'password',
      rules: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '真实姓名',
      prop: 'realName',
      overHidden: true,
      hide: true
    },
    {
      label: '昵称',
      prop: 'nickname',
      overHidden: true,
      hide: true
    },
    {
      label: '性别',
      prop: 'sex',
      dicData: [
        {
          label: '男',
          value: 1
        },
        {
          label: '女',
          value: 2
        }
      ],
      type: 'radio'
    },
    {
      label: '头像',
      prop: 'headPortrait',
      hide: true
    },
    {
      label: '邮箱',
      prop: 'email',
      width: 160
    },
    {
      label: '手机号',
      prop: 'phoneNumber',
      search: true
    },
    {
      label: '最后一次登录IP',
      prop: 'lastLoginIp',
      hide: true,
      addDisplay: false,
      editDisplay: false
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
      prop: 'remark',
      hide: true
    },
    {
      label: '角色',
      prop: 'roleIds',
      hide: true,
      props: {
        label: 'name',
        value: 'id'
      },
      dicData: [],
      rules: [
        {
          required: true,
          message: '请选择角色',
          trigger: 'blur'
        }
      ],
      type: 'select',
      row: true,
      filterable: true,
      drag: true,
      multiple: true
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
