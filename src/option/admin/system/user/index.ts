export default {
  index: true,
  selection: true,
  border: true,
  stripe: true,
  delBtn: false,
  viewBtn: true,
  excelBtn: true,
  sortable: true,
  align: 'center',
  headerAlign: 'center',
  rowKey: 'id',
  labelWidth: 150,
  labelPosition: 'right',
  selectable: row => {
    return row.userName !== 'admin'
  },
  column: [
    {
      label: '主键id',
      prop: 'id',
      hide: true,
      disabled: true
    },
    {
      label: '用户名称',
      prop: 'userName',
      overHidden: true,
      search: true
    },
    {
      label: '密码',
      prop: 'password',
      hide: true,
      type: 'password'
    },
    {
      label: '真实姓名',
      prop: 'realName'
    },
    {
      label: '昵称',
      prop: 'nickname',
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
      search: true,
      searchType: 'radio',
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
      width: 180
    },
    {
      label: '手机号',
      prop: 'phoneNumber',
      width: 120
    },
    {
      label: '最后一次登录IP',
      prop: 'lastLoginIp',
      hide: true,
      disabled: true
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
      type: 'radio'
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
      type: 'select',
      multiple: true,
      labelTip: '当前角色，可多选'
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
