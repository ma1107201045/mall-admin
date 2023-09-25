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
      label: '标题',
      prop: 'title',
      overHidden: true,
      search: true
    },
    {
      label: '操作类型',
      prop: 'operationType',
      dicData: [
        {
          label: '创建',
          value: 1
        },
        {
          label: '删除',
          value: 2
        },
        {
          label: '更改',
          value: 3
        },
        {
          label: '读取',
          value: 4
        },
        {
          label: '其他',
          value: 5
        }
      ],
      slot: true,
      search: true,
      searchType: 'select'
    },
    {
      label: '调用类名',
      prop: 'callClass',
      hide: true
    },
    {
      label: '调用类方法',
      prop: 'callClassMethod',
      hide: true
    },
    {
      label: '请求参数',
      prop: 'requestParam',
      hide: true
    },
    {
      label: '返回参数',
      prop: 'responseParam',
      hide: true
    },
    {
      label: '执行时长',
      prop: 'executeDuration',
      formatter: row => {
        return row.executeDuration + 'ms'
      }
    },
    {
      label: '执行结果',
      prop: 'executeResult',
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
      label: '失败原因',
      prop: 'failReason',
      hide: true
    },
    {
      label: '客户端IP',
      prop: 'clientIp'
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
