import { ref, onMounted } from 'vue';
import { dataConfig } from './data'; //

const useForm = (config = {}) => {
  console.log(' useForm ： '); //
  const varLabel = ref('varLabel');
  setTimeout(() => {
    varLabel.value = '动态Label';
  }, 5000);

  return ({ formState } = { formState: {} }) => [
    ...dataConfig,

    {
      flexRow: 1,
      formType: 'Search',
      itemProps: {
        label: 'searchTest',
        name: 'searchTest',
      },
      comProps: {
        mode: 'multiple',
        'v-model': [formState['search'], 'value'],
        vModel: [formState['search'], 'value'],
        vModel: formState['search'],
        tagRender: p => {
          console.log(' tagRender p ： ', p); //
          return (
            <a-tag color="orange" style="margin-right: 3px">
              {p.label}&nbsp;&nbsp;
            </a-tag>
          );
        },
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
      noRule: true,
      formType: 'CustomCom',
      CustomCom: <div>自定义组件</div>,
      children: ({ formState }) => (
        <>
          <div>自定义组件children</div>
          <a-form-item name="customcom">
            <a-input v-model={[formState['customcom'], 'value']} />
          </a-form-item>
        </>
      ),
      itemProps: {
        label: 'CustomCom',
        name: 'customCom',
      },
    },
    <div class="divCom">
      vnode
      <a-tag color="red">red</a-tag>
    </div>,
    <a-form-item
      name="formItemInput"
      label="formItemInput"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <a-form-item name="formItemInput">
        <a-input-number
          vModel={[formState['formItemInput'], 'value']}
          min="1"
          max="10"
        />
      </a-form-item>
      <span class="ant-form-text">bbb</span>
    </a-form-item>,
    <a-form-item name="radioGroup2" label="radioGroup2">
      <a-radio-group v-model={[formState['radioGroup2'], 'value']}>
        <a-radio value="a">item 1</a-radio>
        <a-radio value="b">item 2</a-radio>
        <a-radio value="c">item 3</a-radio>
      </a-radio-group>
    </a-form-item>,
    <a-form-item name="text" label="text">
      <span class="ant-form-text">texttext</span>
    </a-form-item>,
  ];
};

export default useForm;
