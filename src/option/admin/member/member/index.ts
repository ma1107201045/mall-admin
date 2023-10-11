export default {
  index: true,
  border: true,
  stripe: true,
  addBtn: false,
  delBtn: false,
  editBtn: false,
  viewBtn: true,
  printBtn: true,
  excelBtn: true,
  sortable: true,
  indexWidth: 60,
  rowKey: 'id',
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
  loadingText: '加载中...',
  column: [
    {
      label: '主键id',
      prop: 'id',
      hide: true
    },
    {
      label: '用户名称',
      prop: 'userName',
      hide: true
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
      ],
      slot: true
    },
    {
      label: '生日',
      prop: 'birthday'
    },
    {
      label: '手机号',
      prop: 'phoneNumber'
    },
    {
      label: '头像',
      prop: 'headPortrait',
      type: 'img',
      fileType: 'img'
    },
    {
      label: '个性签名',
      prop: 'personalizedSignature',
      hide: true
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
      type: 'switch'
    },
    {
      label: '注册来源',
      prop: 'registerSource',
      hide: true
    },
    {
      label: '注冊时间',
      prop: 'registerDataTime'
    }
  ]
}
