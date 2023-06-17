export default () => {
  return {
    index: true,
    selection: true,
    align: 'center',
    headerAlign: 'center',
    border: true,
    stripe: true,
    rowKey: 'id',
    addBtn: false,
    editBtn: false,
    column: [
      {
        label: '标题',
        prop: 'title',
        overHidden: true,
        width: 200,
        search: true,
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
        searchType: 'select',
        searchLabelWidth: 100
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
        searchType: 'radio',
        searchLabelWidth: 100
      },
      {
        label: '客户端IP',
        prop: 'clientIp'
      },
      {
        label: '创建人',
        prop: 'createBy'
      },
      {
        label: '创建时间',
        prop: 'createDateTime',
        width: 180
      }
    ]
  }
}
