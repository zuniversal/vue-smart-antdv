import { ref, defineComponent, reactive } from 'vue';
import { SmartForm } from 'vue-smart-antdv';

// 注意 需要写成如下组件形式 才能有自己的数据值 改变值才可以起效
const CountComp = defineComponent({
  setup(props, ctx) {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    return () => {
      return <button onClick={add}>{count.value}</button>;
    };
  },
});

const SmartFormCustom = props => {
  // 自定义注册组件内容，函数形式 接收 formState 对应Form组件的model数据 可自行绑定 或 使用数据进行展示
  const registerComp = ({ formState }) => {
    return {
      CustomTextFormItem: (
        <div className={`CustomFormItem`}>
          CustomFormItem 自定义显示组件元素 - {formState.input}
        </div>
      ),
      CustomCountFormItem: (
        <div className={`CustomFormItem`}>
          CustomFormItem 自定义显示组件元素 - {formState.password} -{' '}
          <CountComp></CountComp>
        </div>
      ),
    };
  };
  return <SmartForm {...props} registerComp={registerComp}></SmartForm>;
};

export default defineComponent({
  setup(props, ctx) {
    return () => {
      const formStateObj = {
        input: '15160208606',
        password: '666666',
      };
      const formState = reactive(formStateObj);

      const config = ({ formState }) => [
        {
          noRule: true,
          formType: 'CustomTextFormItem',
          itemProps: {
            label: 'CustomTextFormItem',
            name: 'CustomTextFormItem',
          },
          comProps: {},
        },
        {
          noRule: true,
          formType: 'CustomCountFormItem',
          itemProps: {
            label: 'CustomCountFormItem',
            name: 'CustomCountFormItem',
          },
          comProps: {},
        },
        {
          noRule: true,
          formType: 'CustomCountFormItem',
          itemProps: {
            label: 'CustomCountFormItem2',
            name: 'CustomCountFormItem2',
          },
          comProps: {},
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
      ];

      return (
        <SmartFormCustom config={config} init={formState}></SmartFormCustom>
      );
    };
  },
});
