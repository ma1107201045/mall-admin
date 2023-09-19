export default {
  index: true,
  border: true,
  stripe: true,
  viewBtn: true,
  copyBtn: true,
  printBtn: true,
  excelBtn: true,
  sortable: true,
  selection: true,
  menuWidth: 290,
  indexWidth: 60,
  labelWidth: 130,
  rowKey: 'id',
  rowParentKey: 'parentId',
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
  editBtnText: '修改',
  updateBtnText: '更新',
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
      overHidden: true,
      rules: [
        {
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '父级菜单',
      prop: 'parentId',
      hide: true,
      props: {
        label: 'name',
        value: 'id',
        children: 'children'
      },
      dicData: [],
      type: 'tree',
      tip: '如果留空，则当前菜单为顶级菜单',
      filterable: true
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
      slot: true,
      type: 'icon',
      labelTip:
        'icon，更多前端Element-Plus,网址：https://element-plus.gitee.io/zh-CN/component/icon.html#icon-collection',
      iconList: [
        {
          label: 'System',
          list: [
            {
              label: 'Plus',
              value: 'Plus'
            }
          ]
        },
        {
          label: 'Arrow',
          list: [
            {
              label: 'ArrowLeft',
              value: 'ArrowLeft'
            }
          ]
        },
        {
          label: 'Document',
          list: [
            {
              label: 'DocumentAdd',
              value: 'DocumentAdd'
            }
          ]
        },
        {
          label: 'Media',
          list: [
            {
              label: 'Microphone',
              value: 'Microphone'
            }
          ]
        },
        {
          label: 'Traffic',
          list: [
            {
              label: 'Location',
              value: 'Location'
            }
          ]
        },
        {
          label: 'Food',
          list: [
            {
              label: 'Watermelon',
              value: 'Watermelon'
            }
          ]
        },
        {
          label: 'Items',
          list: [
            {
              label: 'Printer',
              value: 'Printer'
            },
            {
              label: 'Weather',
              list: [
                {
                  label: 'Sunrise',
                  value: 'Sunrise'
                }
              ]
            },
            {
              label: 'Other',
              list: [
                {
                  label: 'ChromeFilled',
                  value: 'ChromeFilled'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: '菜单顺序',
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
      label: '路由名称',
      prop: 'routeName',
      hide: true,
      rules: [
        {
          required: true,
          message: '请输入路由名称',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '路由路径',
      prop: 'routePath',
      hide: true,
      labelTip: '前端路径',
      rules: [
        {
          required: true,
          message: '请输入路由路径',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '组件路径',
      prop: 'componentPath',
      hide: true,
      labelTip: '前端组件所在绝对路径',
      rules: [
        {
          required: true,
          message: '请输入组件路径',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '按钮权限标识',
      prop: 'permission',
      hide: true,
      labelTip: '按钮权限标识，用于控制按钮显示隐藏实现对数据的读写操作。',
      rules: [
        {
          required: true,
          message: '请输入按钮权限标识',
          trigger: 'blur'
        }
      ]
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
      rules: [
        {
          required: true,
          message: '请选择是否启用',
          trigger: 'blur'
        }
      ],
      type: 'switch',
      value: 1
    },
    {
      label: '备注',
      prop: 'remark',
      hide: true
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
