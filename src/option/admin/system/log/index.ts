export default {
  index: true,
  indexLabel: '序号',
  indexWidth: 55,
  selection: true,
  border: true,
  stripe: true,
  addBtn: false,
  editBtn: false,
  viewBtn: true,
  printBtn: true,
  excelBtn: true,
  sortable: true,
  align: 'center',
  headerAlign: 'center',
  labelWidth: 130,
  rowKey: 'id',
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
      width: 200,
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
      hide: true,
    },
    {
      label: '请求参数',
      prop: 'requestParam',
      hide: true
    },
    {
      label: '返回参数',
      prop: 'responseParam',
      hide: true,
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
      search: true,
      searchType: 'radio'
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
    },
    {
      label: '创建时间',
      prop: 'createDateTime',
      width: 155,
    },
    {
      label: '最后修改人',
      prop: 'lastModifyBy',
      hide: true,
    },
    {
      label: '最后修改时间',
      prop: 'lastModifyDateTime',
      hide: true,
    }
  ]
}
