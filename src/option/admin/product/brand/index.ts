import FileApi from '@/api/admin/file/file'

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
  labelWidth: 130,
  rowKey: 'id',
  align: 'center',
  headerAlign: 'center',
  indexLabel: '序号',
  updateBtnText: '更新',
  loadingText: '加载中...',
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
      label: '品牌名称',
      prop: 'name',
      overHidden: true,
      search: true,
      rules: [
        {
          required: true,
          message: '请输入品牌名称',
          trigger: 'blur'
        }
      ],
      maxlength: 50,
      showWordLimit: true
    },
    {
      label: 'LOGO',
      prop: 'logo',
      type: 'upload',
      rules: [
        {
          required: true,
          message: '请上传logo',
          trigger: 'blur'
        }
      ],
      propsHttp: {
        res: 'data',
        url: 'url'
      },
      canvasOption: {
        text: 'mall',
        ratio: 1
      },
      action: import.meta.env.VITE_API_BASE_URL + FileApi.URL_PREFIX + '/image',
      accept: 'image/jpeg,image/png',
      fileType: 'img',
      listType: 'picture-img',
      fileSize: 10240,
      tip: '只能上传jpeg/png logo，且不超过10M'
    },
    {
      label: '品牌首字母',
      prop: 'firstCharacter',
      rules: [
        {
          required: true,
          message: '请上传品牌首字母',
          trigger: 'blur'
        },
        {
          max: 1,
          message: '只能输入一个字符',
          trigger: 'blur'
        }
      ],
      maxlength: 1,
      showWordLimit: true
    },
    {
      label: '品牌主图',
      prop: 'mainPic',
      type: 'upload',
      rules: [
        {
          required: true,
          message: '请上传品牌主图',
          trigger: 'blur'
        }
      ],
      propsHttp: {
        res: 'data',
        url: 'url'
      },
      canvasOption: {
        text: 'mall',
        ratio: 1
      },
      action: import.meta.env.VITE_API_BASE_URL + FileApi.URL_PREFIX + '/image',
      accept: 'image/jpeg,image/png',
      fileType: 'img',
      listType: 'picture-img',
      fileSize: 10240,
      tip: '只能上传jpeg/png品牌主图，且不超过10M'
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
