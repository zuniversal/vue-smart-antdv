# Vue | Ant-Design-Vue | Elment-plus Project


## 组件说明

```
 基于 Ant-Design-Vue/Elment-plus 组件的上层简化封装，抹平平台代码差异，只需关注组件的逻辑编写，支持组件一切原有api。
 SmartForm 智能表单组件，用 virtual form 的形式描述组件，实现数据动态配置化生成组件，支持普通数据格式、html模板判断、组件混合及以hooks形式配置，以及自定义注册一套符合自己系统的FormType组件显示，实现配置与组件的分离、复用。
 智能快速生成对应表单，并支持自定义显示修改表单项内容、语言国际化等，供项目使用。
 开发时只需关注业务数据实现、无需关注组件本身，对应的form数据配置可以在多处复用、灵活便捷修改。
 可以结合服务端使用，将显示内容控制权交给后端。
```


## Getting Started

Install dependencies,

```bash
$ npm i vue-smart-antdv

$ yarn add vue-smart-antdv
```


#### 使用例子如下 
  * [JSX](https://github.com/zuniversal/vue-smart-antdv/blob/master/examples/DemoJsx.jsx)
  * [VUE](https://github.com/zuniversal/vue-smart-antdv/blob/master/examples/Demo.vue)


#### SmartForm 基于 Ant-Design-Vue， SmartFormEl 基于 Elment-plus 可根据项目库使用情况对应选择组件

```
  import { SmartForm, SmartFormEl } from 'vue-smart-antdv'
```


#### 主要配置参数 支持透传使用全部的 Form 组件相关属性 参数

```
  formType: 指定使用的Form表单元组件元素 不传默认使用Input组件
  formProps: 组件 Form 的所有 props 都会被透传给 Form 组件
  itemProps: 透传配置给 form-item 
  comProps: 透传配置给 form-item 内的对应表单，如 Input、Select 等元素
```


#### formType 支持显示的 Form 表单组件 自定义注册扩展组件例子在下面 - 不传默认显示使用 Input 组件类型

```js

  自定义辅助组件：
  rowText// 块文本
  Label// 只显示 label 文本
  CustomCom// 自定义显示内容组件带label
  PlainText// 纯文本
  Divider// 分隔线组件

  内置支持的表单组件：
  Input// 输入框
  InputNumber// 数字输入框
  Password// 密码框
  TextArea// 文本域
  Select// 下拉框
  Search// 搜索框
  Switch// 开关
  Radio// 单选框
  Checkbox// 多选框
  DatePicker// 让去洗澡去
  MonthPicker// 月份选择器
  RangePicker// 范围选择器
  Rate// 评分
  Slider// 滑懂输入条
  Cascader// 级联选择请
  AutoComplete// 自动完成
  TreeSelect// 树选择器
```


#### 最简单的使用方式 如下配置即可生成一个 Input 组件的表单元素 virtual form 形式描述

```jsx
const dataConfig = [
 {
    itemProps: {
      label: 'label文本',
      name: 'input',
    },
  },
]

// jsx
<SmartForm config={dataConfig} init={formState}></SmartForm>

// vue
<SmartForm :config='dataConfig' :init='formState'></SmartForm>
```


#### 普通数据配置数据源 

```js
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
]

export const dataConfig = [
  {
    formType: 'Divider',
    comProps: {
      dashed: true,
      orientation: "right",
      children: "SmartForm!",
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
    comProps: {
    },
  },
  {
    formType: 'Password',
    itemProps: {
      label: 'password',
      name: 'password',
    },
    comProps: {
    },
  },
  {
    formType: 'TextArea',
    itemProps: {
      label: 'textarea',
      name: 'textarea',
    },
    comProps: {
    },
  },
  {
    formType: 'InputNumber',
    itemProps: {
      label: 'inputNumber',
      name: 'inputNumber',
    },
    comProps: {
      min: "1", 
      max: "80", 
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
      options : [
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
      mode: "multiple",
      multiple: true, // el
      options : [
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
    comProps: {
    },
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
      ]
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
      ]
    },
  },
  {
    formType: 'DatePicker',
    itemProps: {
      label: 'datePicker',
      name: 'datePicker',
    },
    comProps: {
    },
  },
  {
    formType: 'MonthPicker',
    itemProps: {
      label: 'monthPicker',
      name: 'monthPicker',
    },
    comProps: {
    },
  },
  {
    formType: 'RangePicker',
    itemProps: {
      label: 'rangePicker',
      name: 'rangePicker',
    },
    comProps: {
    },
  },
  {
    formType: 'Rate',
    itemProps: {
      label: 'rate',
      name: 'rate',
    },
    comProps: {
    },
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
    comProps: {
    },
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
]

```


#### 组件直接传入 普通数据配置数据源 引入、调用 

```jsx
import { SmartForm } from 'vue-smart-antdv'

// form 组件绑定初始数据值
const formStateObj = {
  input: '15160208888',
  inputNumber: 8,
  password: '666',
  textarea: 'textarea',
  select: 'usa',
  search: ['业务员'],
  switch: false,
  radio: 'b',
  radioGroup: 'b',
  checkbox: ['a', 'b'],
  // datePicker: undefined,
  // monthPicker: undefined,
  // rangePicker: undefined,
  rate: 2.5,
  slider: 80,
  cascader: ['zhejiang', 'hangzhou', 'xihu'],
  autoComplete: 'Downing Street',
  treeSelect: 'parent 1-0',
  customCom: 'CustomComzyb',
  formItemInput: 888,
  text: 'text文本',
  radioGroup2: 'b',
}
const formState = reactive(formStateObj);

const useFormConfig = useForm()

<SmartForm {...props} config={dataConfig} init={formState}></SmartForm>
```


#### jsx hooks 式配置使用

```jsx
import { ref, onMounted, } from 'vue';

const useForm = (config = {}) => {
  const varLabel = ref('varLabel')
  setTimeout(() => {
    varLabel.value = '动态Label'
  }, 5000)
  
  // 当配置项里需要使用到初始数据的变量时，如 自定义formItem数据、自行绑定 或 使用数据进行展示等时，配置项需要写成函数形式 可以接收到 form 的formState数据
  return ({formState} = {formState: {}}) => ([
    ...dataConfig,// 复用普通数据配置

    {
      flexRow: 1,
      formType: 'Search',
      itemProps: {
        label: varLabel.value,
        name: 'searchTest',
      },
      comProps: {
        mode: "multiple",
        'vModel': formState['search'],
        tagRender: (p) => {
          return <a-tag color="orange" style="margin-right: 3px">
            { p.label }&nbsp;&nbsp;
          </a-tag>
        },
        options : [
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
      noRule: true,
      formType: 'CustomCom',
      CustomCom: <div>自定义组件</div>,
      // 写成函数形式 可以接收到 form 的formState数据
      children: ({formState}) => (<>
        <div>自定义组件children</div>
        <a-form-item name="customcom" >
          <a-input v-model={[formState['customcom'], 'value']} />
        </a-form-item>
      </>),
      itemProps: {
        label: 'CustomCom',
        name: 'customCom',
      },
    },
    <div class='divCom'>
      vnode
      <a-tag color="red">red</a-tag>
    </div>,
    <a-form-item name="formItemInput" label="formItemInput" rules={[{ required: true, message: 'Please pick an item!' }]}>
      <a-form-item name="formItemInput" >
        <a-input-number vModel={[formState['formItemInput'], 'value']} min="1" max="10" />
      </a-form-item>
      <span class="ant-form-text">bbb</span>
    </a-form-item>,
    <a-form-item name="radioGroup2" label="radioGroup2">
      <a-radio-group v-model={[formState['radioGroup2'], 'value']} >
        <a-radio value="a">item 1</a-radio>
        <a-radio value="b">item 2</a-radio>
        <a-radio value="c">item 3</a-radio>
      </a-radio-group>
    </a-form-item>,
    <a-form-item name="text" label="text">
      <span class="ant-form-text">texttext</span>
    </a-form-item>,
  ])
};

export default useForm;

```


#### jsx hooks 式配置使用

```jsx
import { SmartForm } from 'vue-smart-antdv'

export default defineComponent({
  setup(props, ctx) {
    return () => {
      const useFormConfig = useForm()
      return <SmartForm :config='useFormConfig' :init='formState'></SmartForm>
    } 
  }
});
```


#### vue hooks template 式配置使用

```vue
<template>
  <SmartForm :config='useFormConfig' :init='formState'></SmartForm>
</template>

import { SmartForm } from 'vue-smart-antdv'

const useFormConfig = useForm()
```


#### 自定义注册一套符合自己系统的FormType组件显示
 
```jsx
import { ref, defineComponent, reactive, } from 'vue';
import { SmartForm } from 'vue-smart-antdv'// 

// 注意 需要写成如下组件形式 才能有自己的数据值 改变值才可以起效
const CountComp = defineComponent({
  setup(props, ctx) {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return () => {
      return <button onClick={add}>{count.value}</button>
    } 
  }
});

const SmartFormCustom = (props) => {
  // 自定义注册组件内容，函数形式 接收 formState 对应Form组件的model数据 可自行绑定 或 使用数据进行展示
  const registerComp = ({formState}) => {
    return ({
      CustomTextFormItem: <div className={`CustomFormItem`}>
        CustomFormItem 自定义显示组件元素 - {formState.input} 
      </div>,
      CustomCountFormItem: <div className={`CustomFormItem`}>
        CustomFormItem 自定义显示组件元素 - {formState.password} - <CountComp></CountComp>
      </div>,
    }) 
  }
  return <SmartForm {...props} registerComp={registerComp}></SmartForm>  
}

export default defineComponent({
  setup(props, ctx) {
    return () => {
      const formStateObj = {
        input: "15160208888",
        password: "666",
      }
      const formState = reactive(formStateObj);

      const config = ({formState}) => [
        {
          noRule: true,  
          formType: 'CustomTextFormItem',
          itemProps: {
            label: 'CustomTextFormItem',
            name: 'CustomTextFormItem',
          },
          comProps: {
          },
        },
        {
          noRule: true,  
          formType: 'CustomCountFormItem',
          itemProps: {
            label: 'CustomCountFormItem',
            name: 'CustomCountFormItem',
          },
          comProps: {
          },
        },
        {
          noRule: true,  
          formType: 'CustomCountFormItem',
          itemProps: {
            label: 'CustomCountFormItem2',
            name: 'CustomCountFormItem2',
          },
          comProps: {
          },
        },
        {
          itemProps: {
            label: 'input',
            name: 'input',
          },
          comProps: {
          },
        },
        {
          formType: 'Password',
          itemProps: {
            label: 'password',
            name: 'password',
          },
          comProps: {
          },
        },
      ]

      return <SmartFormCustom config={config} init={formState}></SmartFormCustom>
    } 
  }
});
```

#### 自定义注册FormType组件例子
  * [JSX](https://github.com/zuniversal/vue-smart-antdv/blob/master/examples/SmartFormCustom.jsx)


#### 显示效果
![image](https://raw.githubusercontent.com/zuniversal/vue-smart-antdv/blob/master/assets/ui.png)


#### 支持修改SmartForm内部定义配置 目前支持：  comDefProps、getLabel、rules

```js
// 全部引入
import * as SmartAntd from 'vue-smart-antdv'
SmartAntd.(comDefProps、getLabel、rules)
// 或者按需引入 部分需要修改的配置
import { 需要的配置项 } from 'vue-smart-antdv'

// 自定义修改后要显示的配置 或者部分修改
const 自定义的配置项 = {
  ...comDefProps,
}

// template 修改配置
<SmartForm :配置项='自定义的配置项' :config='dataConfig' :init='formState'></SmartForm>

// jsx 修改配置
<SmartForm 配置项={自定义的配置项} config={dataConfig} init={formState}></SmartForm>
```


#### 自定义基础SmartForm组件，覆写 getLabel、rules 方法，结合 vue-i18n 等国际化插件可实现组件语言的国际化。

```js
import * as SmartAntd from 'vue-smart-antdv'
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

// label 对应formItem组件接收到的label文本
// key 对应的组件类型 formType
export const getLabel = (label, key) => {
  const labelMap = {
    Input: i18n.t('InputPrefix') + label,
    Select: i18n.t('SelectPrefix') + label,
    // ...其它自定义,
  };
  return labelMap[key];
};

// params 对应config里每项formItem组件的配置 可结构取出需要的配置
export const rules = (params, extra) => {
  const { items, label, formType, ruleExtra } = params;
  const message = getLabel(label, formType);
  return [
    {
      required: true,
      message: label + REQUIRE,
    },
    ...(ruleExtra ? ruleExtra : []),
  ];
};

// template 修改配置
<SmartForm :getLabel='getLabel' :rules='rules' v-bind='props'></SmartForm>

// jsx 修改配置
<SmartForm getLabel={getLabel} rules={rules} {...props}></SmartForm>
```


#### 其它配置 支持传入顶部、底部 slots

```jsx
const slotsCom = {
  topSlot: () => <div style={{textAlign: 'center'}}>父组件传递 topSlot</div>,
  bottomSlot: () => <div style={{textAlign: 'center'}}>
    父组件传递 bottomSlot
    // antd-vue 提交
    <a-form-item wrapper-col={{ span: 12, offset: 6 }}>
      <a-button type="primary" htmlType="submit" html-type="submit">Submit</a-button>
    </a-form-item>
    // 或者 el
    <el-form-item wrapper-col={{ span: 12, offset: 6 }}>
      <el-button type="primary" onClick={() => {
        submitForm(formRef)
      }}>Submit</el-button>
    </el-form-item>
  </div>,
}

<SmartForm config={dataConfig} init={formState}>{slotsCom}</SmartForm>
```


#### 支持ref获取组件实例 

```jsx
const formRef = ref();

// 如下 formRef.value.formRef 即 Form 表单实例 可以调用相关Form组件方法
const getRes = () => {
  const res = formRef.value.formRef.getFieldsValue()
}

<SmartForm ref={formRef} config={dataConfig} init={formState}></SmartForm>
```


#### config 配置参数说明 支持数组和函数形式，目前函数形式带有 {formState} 参数， 值是父组件传入的 form 表单初始值，可自主决定使用该数据作额外信息显示、绑定等操作

```js
  config: {// 组件formItem配置
    type: Array | Function,
    default: [],
  },
```


#### 主要配置参数 支持透传使用全部的 Form 组件相关属性 参数

```js
  name: {// 组件name
    type: String,
    default: 'smartForm',
  },
  config: {// 组件formItem配置
    type: Array,
    default: [],
  },
  formProps: {// 组件 Form props
    type: Object,
    default: {},
  },
  formItemLayout: {// 组件 Form 布局
    type: Object,
    default: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
  },
  init: {// Form 组件 双绑model的初始数据值
    type: Object,
    default: {},
  },
  isDisabledAll: {// 是否禁用整个表单
    type: Boolean,
    default: false,
  },
  noRuleAll: {// 是否关闭整个表单rule校验
    type: Boolean,
    default: false,
  },
```


```js
  {
    // 除 Form.Item 表单元素外SmartForm的扩展属性
    flexRow: 1,// 每项元素是否独占一行显示
    formType: 'Select',// 对应要显示的表单组件类型（可通过 registerComp 方法定制想要对应展示的元素内容）
    noRule: false,// 是否关闭该项表单默认的 required: true, 非必填
    ruleExtra: [{ required: true, message: '',  },],// 额外的 Form.Item 校验规则 + 表单默认的 required: true, 非必填
    formRules: [{ required: true, message: '',  },],// 完全自定义编写 Form.Item 校验规则
    isFormat: () => {},// 对config里的每项配置调用传入的该格式化方法处理数据
    noLabel: false,// 不显示 label 文本
    haveDivider: false,// 是否显示 分隔线
    PropsCom: () => {},// Form.Item内使用父组件传入的方法创建
    
    // itemProps comProps 是透传 Ant-Design-Vue/Elment-plus 表单原有属性配置
    itemProps: {// Form.Item 每项组件的属性
      label: 'select',
      name: 'select',
    },
    comProps: {// Form.Item 内部表单项支持的各属性
      class: 'selectClass',
      options: [
        {
          label: 'car',
          value: 'car',
        },
        {
          label: 'phone',
          value: 'phone',
        },
      ],
    },
  },
```


#### 父组件的事件统一存储放到 eventAttr 对象传递给子组件 SmartForm

```jsx
const propsFn = (params) => {
  console.log(' propsFn ： ', params,  )
  // 父组件相关代码操作
}

const eventAttr = {
  propsFn,
}

// jsx
<SmartForm eventAttr={eventAttr} config={dataConfig} init={formState}></SmartForm>

// vue
<SmartForm :eventAttr='eventAttr :config='dataConfig' :init='formState'></SmartForm>
```


#### 可以结合服务端使用，将显示内容控制权交给后端。

```jsx
const dataConfig = ref([])
const req = async () => {
  dataConfi.value = await axios.get('/formConfig')
}

onMounted(() => {
  req()
})

// jsx
<SmartForm eventAttr={eventAttr} config={dataConfig} init={formState}></SmartForm>

// vue
<SmartForm :eventAttr='eventAttr :config='dataConfig' :init='formState'></SmartForm>
```

#### 其它参数详细作用请查看 packages/config 内的 defProps