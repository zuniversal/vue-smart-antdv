const treeData = [
  {
    title: 'tree1',
    value: 'tree1',
    id: 'tree1',
    children: [
      {
        title: 'tree1-1',
        value: 'tree1-1',
        id: 'tree1-1',
        children: [
          {
            title: 'tree1-1-1',
            value: 'tree1-1-1',
            id: 'tree1-1-1',
          },
          {
            title: 'tree1-1-2',
            value: 'tree1-1-2',
            id: 'tree1-1-2',
          },
        ],
      },
      {
        title: 'tree2',
        value: 'tree2',
        id: 'tree2',
      },
    ],
  },
];

export const dataConfig = [
  {
    formType: 'Divider',
    comProps: {
      dashed: true,
      orientation: 'right',
      children: 'SmartForm!',
    },
  },
  {
    formType: 'Divider',
  },
  {
    itemProps: {
      label: 'input',
      name: 'input',
    },
    comProps: {},
  },
  {
    formType: 'Password',
    itemProps: {
      label: 'password',
      name: 'password',
    },
    comProps: {},
  },
  {
    formType: 'TextArea',
    itemProps: {
      label: 'textarea',
      name: 'textarea',
    },
    comProps: {},
  },
  {
    formType: 'InputNumber',
    itemProps: {
      label: 'inputNumber',
      name: 'inputNumber',
    },
    comProps: {
      min: '1',
      max: '80',
    },
  },
  {
    flexRow: 1,
    formType: 'Select',
    itemProps: {
      label: 'select',
      name: 'select',
    },
    comProps: {
      class: '',
      options: [
        {
          label: '客户',
          value: '客户',
        },
        {
          label: '业务员',
          value: '业务员',
        },
      ],
    },
  },
  {
    flexRow: 1,
    formType: 'Search',
    itemProps: {
      label: 'search',
      name: 'search',
    },
    comProps: {
      mode: 'multiple',
      multiple: true, // el
      options: [
        {
          label: '客户',
          value: '客户',
        },
        {
          label: '业务员',
          value: '业务员',
        },
      ],
    },
  },
  {
    formType: 'Switch',
    itemProps: {
      label: 'switch',
      name: 'switch',
    },
    comProps: {},
  },
  {
    formType: 'Radio',
    itemProps: {
      label: 'radio',
      name: 'radio',
    },
    comProps: {
      options: [
        {
          label: 'radioGroup a',
          value: 'a',
        },
        {
          label: 'radioGroup b',
          value: 'b',
        },
      ],
    },
  },
  {
    formType: 'Checkbox',
    itemProps: {
      label: 'checkbox',
      name: 'checkbox',
    },
    comProps: {
      options: [
        {
          label: 'checkbox a',
          value: 'a',
        },
        {
          label: 'checkbox b',
          value: 'b',
        },
      ],
    },
  },
  {
    formType: 'DatePicker',
    itemProps: {
      label: 'datePicker',
      name: 'datePicker',
    },
    comProps: {},
  },
  {
    formType: 'MonthPicker',
    itemProps: {
      label: 'monthPicker',
      name: 'monthPicker',
    },
    comProps: {},
  },
  {
    formType: 'RangePicker',
    itemProps: {
      label: 'rangePicker',
      name: 'rangePicker',
    },
    comProps: {},
  },
  {
    formType: 'Rate',
    itemProps: {
      label: 'rate',
      name: 'rate',
    },
    comProps: {},
  },
  {
    formType: 'Slider',
    itemProps: {
      label: 'slider',
      name: 'slider',
    },
    comProps: {
      marks: {
        0: 'A',
        20: 'B',
        40: 'C',
        60: 'D',
        80: 'E',
        100: 'F',
      },
    },
  },
  {
    formType: 'Cascader',
    itemProps: {
      label: 'cascader',
      name: 'cascader',
    },
    comProps: {
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
  },
  {
    formType: 'AutoComplete',
    itemProps: {
      label: 'autoComplete',
      name: 'autoComplete',
    },
    comProps: {},
  },
  {
    formType: 'TreeSelect',
    itemProps: {
      label: 'treeSelect',
      name: 'treeSelect',
    },
    comProps: {
      treeData,
      data: treeData,
    },
  },
];
