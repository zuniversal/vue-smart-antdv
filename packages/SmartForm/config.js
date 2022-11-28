export const SELECT_TXT = '请选择';
export const INPUT_TXT = '请输入';
export const WORD = '关键字';
export const REQUIRE = '字段必填！';

export const comDefProps = ({ formType }) => {
  const comPropsMap = {
    rowText: '',
    Divider: {
      rules: null,
    },
    Input: {
      allowClear: true,
    },
    InputNumber: {
      allowClear: true,
    },
    TextArea: {
      allowClear: true,
      // autoSize: {
      //   minRows: 4,
      //   // maxRows: 5
      // }
    },
    Select: {},
    Search: {},
    Password: {},
    Cascader: {},
    Radio: {},
    Checkbox: {},
    CheckboxItem: {},
    DatePicker: {},
    MonthPicker: {
      picker: 'month',
    },
    RangePicker: {
      format: 'YYYY/MM/DD',
      // ranges: {
      //   今天: [moment(), moment()],
      //   这个月: [moment().startOf('month'), moment().endOf('month')],
      // },
    },
    Rate: {},
    Slider: {},
    Cascader: {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    },
    AutoComplete: {
      options: [
        { value: 'Burns Bay Road' },
        { value: 'Downing Street' },
        { value: 'Wall Street' },
      ],
      filterOption: (input, option) => {
        return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
      },
    },
    TreeSelect: {
      allowClear: true,
      showSearch: true,
      treeDefaultExpandAll: true,
      treeNodeFilterProp: 'label',
    },
  };

  return comPropsMap[formType];
};

export const getLabel = (label, key) => {
  const labelMap = {
    rowText: '',
    Divider: ' ',
    Input: INPUT_TXT + label,
    InputNumber: INPUT_TXT + label,
    Password: INPUT_TXT + label,
    TextArea: INPUT_TXT + label,
    Select: SELECT_TXT + label,
    Search: SELECT_TXT + label,

    Radio: SELECT_TXT + label,
    Checkbox: SELECT_TXT + label,
    CheckboxItem: SELECT_TXT + label,
    DatePicker: SELECT_TXT + label,
    MonthPicker: SELECT_TXT + label,
    // RangePicker: SELECT_TXT + label,
    Rate: SELECT_TXT + label,
    Slider: SELECT_TXT + label,
    Cascader: SELECT_TXT + label,
    AutoComplete: INPUT_TXT + label,
    TreeSelect: SELECT_TXT + label,
  };

  return labelMap[key];
};

export const rules = (params, extra) => {
  const { items, label, formType, ruleExtra } = params;
  const message = getLabel(label, formType);
  // console.log(' rules   params, extra,  ,   ： ', params, extra, message, label, formType,  );

  return [
    {
      required: true,
      message: label + REQUIRE,
    },
    ...(ruleExtra ? ruleExtra : []),
  ];
};

export const defProps = {
  formRef: {
    type: Object,
    default: {},
  },
  // ref: {
  //   type: Object,
  //   default: {},
  // },
  formState: {
    type: Object,
    default: {},
  },
  getFormValue: {
    type: Function,
    default: () => {},
  },

  registerComp: {
    type: Function,
    default: () => {},
  },
  eventAttr: {
    type: Object,
    default: {},
  },
  propsFn: {
    type: Function,
    default: () => {},
  },
  name: {
    // 组件name
    type: String,
    default: 'smartForm',
  },
  config: {
    // 组件formItem配置
    type: Array,
    default: [],
  },
  formProps: {
    // 组件 Form props
    type: Object,
    default: {},
  },
  formItemLayout: {
    // 组件 Form 布局
    type: Object,
    default: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
  },
  model: {
    type: Object,
    default: {},
  },
  init: {
    // 组件 初始数据值
    type: Object,
    default: {},
  },

  // class: {
  //   type: String,
  //   default: '',
  // },
  flexRow: {
    type: Number,
    default: 0,
  },
  formBtn: {
    type: Object,
    default: {},
  },
  isRowBtn: {
    type: Boolean,
    default: false,
  },
  onSubmit: {
    type: Function,
    default: () => ({}),
  },
  onFail: {
    type: Function,
    default: () => ({}),
  },
  onFieldChange: {
    type: Function,
    default: () => ({}),
  },
  propsForm: {
    type: Object,
    default: {},
  },
  isMockData: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
    default: '',
  },
  noPh: {
    type: Boolean,
    default: false,
  },
  formLayouts: {
    type: Object,
    default: {},
  },
  isSearchForm: {
    type: Boolean,
    default: false,
  },
  isFormat: {
    type: Boolean,
    default: false,
  },
  searchRight: {
    type: Boolean,
    default: false,
  },
  isDisabledAll: {
    // 是否禁用整个表单
    type: Boolean,
    default: false,
  },
  noRuleAll: {
    // 是否关闭整个表单rule校验
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
  noLabelLayout: {
    type: Boolean,
    default: false,
  },
};
