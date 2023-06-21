export default {
  index: true,
  selection: true,
  border: true,
  stripe: true,
  viewBtn: true,
  excelBtn: true,
  sortable: true,
  align: 'center',
  headerAlign: 'center',
  rowKey: 'id',
  column: [
    {
      label: '主键id',
      prop: 'id',
      hide: true,
      display: false
    },
    {
      label: '用户名称',
      prop: 'userName',
      overHidden: true
    },
    {
      label: '真实姓名',
      prop: 'realName',
      overHidden: true
    },
    {
      label: '昵称',
      prop: 'nickname',
      overHidden: true
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
      ]
    },
    {
      label: '头像',
      prop: 'headPortrait'
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
      hide: true
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
      hide: true
    },
    {
      label: '角色',
      prop: 'roleIds',
      props: {
        label: 'name',
        value: 'id'
      },
      dicData: [],
      hide: true,
      type: 'select',
      multiple: true
    },
    {
      label: '创建人',
      prop: 'createBy'
    },
    {
      label: '创建时间',
      prop: 'createDateTime',
      width: 180
    },
    {
      label: '最后修改人',
      prop: 'lastModifyBy',
      hide: true,
      labelWidth: '100'
    },
    {
      label: '最后修改时间',
      prop: 'lastModifyDateTime',
      hide: true,
      labelWidth: '110'
    }
  ]
}
