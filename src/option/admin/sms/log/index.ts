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
      label: '服务名称',
      prop: 'serviceName',
      search: true
    },
    {
      label: '业务名称',
      prop: 'businessName',
      search: true
    },
    {
      label: '短信类型',
      prop: 'type',
      dicData: [
        {
          label: '通知',
          value: 1
        },
        {
          label: '验证码',
          value: 2
        }
      ],
      slot: true,
      search: true,
      searchType: 'select',
      type: 'select'
    },
    {
      label: '手机号',
      prop: 'phoneNumber',
      search: true
    },
    {
      label: '每天上限',
      prop: 'upperLimit',
      hide: true
    },
    {
      label: '间隔时间',
      prop: 'intervalTime',
      hide: true,
      formatter: row => {
        return row.intervalTime + 'min'
      }
    },
    {
      label: '发送内容',
      prop: 'content',
      hide: true
    },
    {
      label: '验证码',
      prop: 'captcha',
      hide: true
    },
    {
      label: '验证码长度',
      prop: 'captchaLength',
      hide: true
    },
    {
      label: '验证码有效期 （分钟）',
      prop: 'captchaExpiryDate',
      hide: true,
      formatter: row => {
        return row.captchaExpiryDate + 'min'
      }
    },
    {
      label: '是否成功',
      prop: 'isSuccess',
      dicData: [
        {
          label: '成功',
          value: 1
        },
        {
          label: '失败',
          value: 0
        }
      ],
      slot: true,
      search: true,
      searchType: 'radio',
      type: 'radio'
    },
    {
      label: '失败信息',
      prop: 'failMessage',
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
