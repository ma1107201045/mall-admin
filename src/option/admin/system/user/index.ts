export default () => {
  return {
    index: true,
    align: 'center',
    headerAlign: 'center',
    border: true,
    stripe: true,
    column: [
      {
        label: '用户名称',
        prop: 'userName',
        search: false,
        rules: [
          {
            required: true,
            message: '请输入用户名称',
            trigger: 'blur'
          }
        ]
      },
      {
        label: '值(value11111)',
        prop: 'value',
        search: true,
        rules: [
          {
            required: true,
            message: '请输入值(value)',
            trigger: 'blur'
          }
        ]
      },
      {
        label: '参数(code)',
        prop: 'code',
        search: true,
        rules: [
          {
            required: true,
            message: '请输入参数(code)',
            trigger: 'blur'
          }
        ]
      },
      {
        label: '备注',
        prop: 'note'
      }
    ]
  }
}
