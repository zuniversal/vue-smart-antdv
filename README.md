# vue project


## 组件说明

```
 基于 Ant-Design-Vue/Elment-plus 组件的上层简化封装，抹平平台代码差异，只需关注组件的业务实现，组件一切原有api依旧支持。
 SmartForm 智能表单组件 实现数据动态配置化生成组件，支持普通数据格式、组件混合配置及以hooks形式配置，实现配置与组件的分离、复用。智能快速生成对应表单，并支持自定义显示修改表单项内容，供项目使用。
```


## Getting Started

Install dependencies,

```bash
$ npm i vue-smart-antdv

$ yarn add vue-smart-antdv
```


#### 使用例子在源码包里的 examples 目录下 
  * [JSX](https://github.com/zuniversal/vue-smart-antdv/blob/master/examples/DemoJsx.jsx)
  * [VUE](https://github.com/zuniversal/vue-smart-antdv/blob/master/examples/Demo.vue)


#### SmartForm 基于 Ant-Design-Vue SmartFormEl 基于 Elment-plus 可根据项目业务选择性使用对应组件

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


#### 最简单的使用方式 如下配置即可生成一个 Input 组件的表单元素

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


#### 主要配置参数 支持透传使用全部的 Form 组件相关属性 参数

```
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
  init: {// 组件 初始数据值
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

const useFormConfig = useForm()

<SmartForm {...props} config={dataConfig} init={formState}></SmartForm>
```


#### jsx hooks 式配置使用

```jsx
import { ref, onMounted, } from 'vue';

const useForm = (config = {}) => {
  console.log(' useForm ： ',    )// 
  const varLabel = ref('varLabel')
  setTimeout(() => {
    varLabel.value = '动态Label'
  }, 5000)
  
  // 当配置项里需要使用到初始数据的变量时，如 自定义formItem数据时，配置项需要写成函数式
  return ({formState} = {formState: {}}) => ([
    ...dataConfig,// 使用普通配置数据

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

```vue
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


// vue 修改配置vue
<SmartForm :配置项='自定义的配置项' :config='dataConfig' :init='formState'></SmartForm>

// jsx 修改配置vue
<SmartForm 配置项={自定义的配置项} config={dataConfig} init={formState}></SmartForm>
```


#### 其它配置 支持传入顶部、底部 slots

```jsx
const slotsCom = {
  topSlot: () => <div style={{textAlign: 'center'}}>父组件传递 topSlot</div>,
  bottomSlot: () => <div style={{textAlign: 'center'}}>父组件传递 bottomSlot</div>,
}

<SmartForm config={dataConfig} init={formState}>{slotsCom}</SmartForm>
```


#### 父组件的事件统一存储放到 eventAttr 对象传递给子组件 SmartForm

```jsx
const propsFn = (params) => {
  console.log(' propsFn   ,   ： ', params,  )
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


#### 支持ref获取组件实例 

```jsx
const formRef = ref();

// 如下 formRef.value.formRef 即 Form 表单实例 可以调用相关Form组件方法
const getRes = () => {
  const res = formRef.value.formRef.getFieldsValue()
}

<SmartForm ref={formRef} config={dataConfig} init={formState}></SmartForm>
```

#### 其它参数详细作用请查看 vue-smart-antdv/config 内的 defProps