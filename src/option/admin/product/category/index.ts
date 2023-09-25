export default {
  index: true,
  border: true,
  stripe: true,
  delBtn: false,
  editBtn: false,
  viewBtn: true,
  copyBtn: true,
  printBtn: true,
  excelBtn: true,
  sortable: true,
  selection: true,
  menuWidth: 290,
  indexWidth: 60,
  labelWidth: 140,
  rowKey: 'id',
  rowParentKey: 'parentId',
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
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
      label: '分类名称',
      prop: 'name',
      overHidden: true,
      rules: [
        {
          required: true,
          message: '请输入分类名称',
          trigger: 'blur'
        }
      ],
      maxlength: 20,
      showWordLimit: true
    },
    {
      label: '父级分类',
      prop: 'parentId',
      hide: true,
      type: 'cascader',
      dicData: [],
      props: {
        label: 'name',
        value: 'id',
        children: 'children'
      },
      checkStrictly: true,
      tip: '如果留空，则当前分类为顶级分类',
      filterable: true
    },
    {
      label: '顺序',
      prop: 'sort',
      type: 'number',
      value: 1,
      min: 1,
      max: 2147483647,
      controlsPosition: 'left'
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
      label: '级别',
      prop: 'level',
      hide: true,
      type: 'number',
      value: 1,
      min: 1,
      max: 2147483647,
      controlsPosition: 'left',
      disabled: true
    },
    {
      label: '是否显示在导航栏',
      prop: 'isShowNav',
      slot: true,
      type: 'switch',
      rules: [
        {
          required: true,
          message: '请选择是否显示在导航栏',
          trigger: 'blur'
        }
      ],
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
      value: 0
    },
    {
      label: '关键字',
      prop: 'keywords',
      hide: true
    },

    {
      label: '是否启用',
      prop: 'isEnable',
      slot: true,
      type: 'switch',
      rules: [
        {
          required: true,
          message: '请选择是否启用',
          trigger: 'blur'
        }
      ],
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
      value: 1
    },
    {
      label: '描述',
      prop: 'description',
      hide: true,
      overHidden: true,
      maxlength: 200,
      showWordLimit: true
    },
    {
      label: '属性集',
      prop: 'attributeIds',
      hide: true,
      span: 24,
      row: true,
      size: 'medium',
      rules: [
        {
          required: true,
          message: '请选择属性集',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '创建人',
      prop: 'createBy',
      hide: true,
      overHidden: true,
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '创建时间',
      prop: 'createDateTime',
      hide: true,
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '最后修改人',
      prop: 'lastModifyBy',
      addDisplay: false,
      editDisplay: false
    },
    {
      label: '最后修改时间',
      prop: 'lastModifyDateTime',
      addDisplay: false,
      editDisplay: false
    }
  ]
}
