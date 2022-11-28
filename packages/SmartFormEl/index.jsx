import { defineComponent, reactive, isVNode, ref, computed, toRefs } from 'vue';
import Vue from 'vue';
// import { getLabel, defProps, rules, comDefProps, } from './config'//
import * as formConfigs from './config'; //
// export { default as config } from './config'//
// console.log(' formConfigs ： ', formConfigs,  )//
import {
  renderSelectItem,
  renderRadioItem,
  renderCheckboxItem,
} from './config'; //

const bounceIn = '';

export default defineComponent({
  props: formConfigs.defProps,
  setup(props, ctx) {
    console.log(' SmartForm props ： ', props, ctx, ctx.attrs.com, isVNode); //
    const {
      getFormValue,
      // ref: formRef,
      // ref,
      // formRef,
      // formState,
      children,

      comDefProps = formConfigs.comDefProps,
      getLabel = formConfigs.getLabel,
      rules = formConfigs.rules,

      // comDefProps,
      // getLabel,
      // rules,

      name,
      config,
      registerComp,
      formProps,
      formItemLayout,
      model,
      init,
      flexRow,
      formBtn,
      isRowBtn,
      onSubmit,
      onFail,
      onFieldChange,
      propsForm,
      isMockData,
      action,
      noPh,
      formLayouts,
      isSearchForm,
      isFormat,
      isDisabledAll,
      noRuleAll,
      size,
      noLabelLayout,
    } = props;

    const formStateObj = {
      xxxxxxxxxxxxxx: '其它属性',
      customCom: 'CustomComzyb',
      formItemInput: 888,
      text: 'texttexttext',
      radioGroup2: 'b',

      input: '15160208606',
      inputNumber: 8,
      password: '666666',
      textarea: 'textarea888',
      select: '业务员',
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
      treeSelect: ['tree2'],
    };
    const formState = reactive(init);

    const formRef = ref();
    ctx.expose({ formRef });
    console.log(' SmartForm formRef ： ', formRef, formState); //

    const getData = () => {
      console.log(' getData   ,   ： ', formState);
      return formState;
    };

    // const formState = {
    //   'input-number': 3,
    //   'checkbox-group': ['A', 'B'],
    //   rate: 3.5,
    //   select: 'china',
    //   selectMultiple: ['red', 'green'],
    // }
    const onFinish = values => {
      console.log(
        'Success:',
        values,
        JSON.parse(JSON.stringify(values)),
        formState,
      );
      vlog('Success:', values, JSON.parse(JSON.stringify(values)));
      getFormValue(values);
      // fetch('/', {
      //   method: 'post',
      //   body: JSON.stringify(values),
      //   body: values,
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then(function(data) {

      // })
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const initialValues = init;
    // const initialValues = Object.keys(init).length
    //   ? init
    //   : // : isMockData && (action && action !== 'add')
    //   isMockData && true
    //   ? mockFormData(configs, init)
    //   : initData;
    const configs = config;
    // const configs = isFormat
    //   ? formatConfig(config, { isSearchForm, isDisabledAll, action })
    //   : config;

    const formItems = computed(() => {
      // 注意 该部分组件必须写到 return 里 否则只是死的代码 或者
      // 如果 定义在 setup 不放到return里 必须定义成 函数的显示 然后模板调用
      const formItems = configs({ formState })?.map((item, i) => {
        // console.log(' isVNode(items) ： ', isVNode(item), item, isVNode, )//
        const isVNodeItem = isVNode(item);
        const isCustomCom = item.formType === 'CustomCom';
        if (isVNodeItem || isCustomCom) {
          const isFormItem = item.type?.name === 'AFormItem';
          const isString = typeof item.type === 'string';
          // console.log(' isFormItem ： ', isFormItem, item, item.type?.name, isString, typeof item.type)//
          if (isFormItem) {
            return item;
          }
          if (isString) {
            // console.log(' 普通dom ： ', item   )//
            return (
              <el-form-item label="  " {...item.comProps} colon={false}>
                {item}
              </el-form-item>
            );
          }
          if (isCustomCom) {
            // console.log(' 普通 isCustomCom ： ', item   )//
            return (
              <el-form-item label="  " {...item.itemProps} colon={false}>
                {item.children({ formState })}
              </el-form-item>
            );
          }
        }

        const items = { formType: 'Input', ...item };
        const {
          formType = 'Input',
          checkboxContent,
          itemProps = {},
          comProps,
          radioOptions,
          selectOptions,
          customLabel,
          rowText,
          extra,
          type,
          noRule,
          radioData = [],
          checkboxData = [],
          selectData = [],
          // selectSearch = () => {},
          selectSearch,
          opType,
          haveDivider,
          isSearchForm,
          searchSuffix,
          CustomCom,
          PropsCom,
          noLabel,
          LabelCom,
          plainText,
          ruleExtra,
          formRules,
        } = items;

        const flexRows = items.flexRow ? items.flexRow : flexRow;

        // if (typeof type === 'function') {
        // if (isValidElement(items)) {
        //   return items;
        // }

        if ((!formType || formType === 'Input') && isSearchForm) {
          items.comProps.onPressEnter = props.getList;
        }

        const isDivider = item.formType === 'Divider';
        if (isDivider) {
          itemProps.label = ' ';
          itemProps.rules = null;
        }

        const { label } = itemProps;
        const itemPropsCls =
          itemProps?.class +
          `${i === configs.length - 1 ? ' lastFormItem' : ''}`;

        const formItemCommonProps = {
          colon: false,
          ...itemProps,
          prop: itemProps.name,
        };

        if (noLabel) {
          formItemCommonProps.label = '';
        }
        // if (
        //   formType === 'Radio' ||
        //   formType === 'Switch' ||
        //   formType === 'Checkbox'
        // ) {
        //   console.log(
        //     ' formItemCommonPropsformItemCommonPropsformItemCommonProps ： ',
        //     formType,
        //   );
        //   // formItemCommonProps.valuePropName = `checked`;
        // }

        // if (formType === 'Dynamic') {
        //   console.log(' formTypeformType ： ', formItemCommonProps, formType, formType === 'Dynamic'    )//
        //   formItemCommonProps.class = `dynamicRow ${formItemCommonProps.class}  `
        // }

        const formItemDividerProps = {
          ...formItemCommonProps,
          class: `formItems w100 ${bounceIn} ${itemPropsCls}  `,
        };
        const formItemNoRuleProps = {
          ...formItemCommonProps,
          class: `formItems rowText ${bounceIn} ${itemPropsCls}  `,
        };
        const formItemProps = {
          rules: formRules
            ? formRules
            : noRule || noRuleAll
            ? undefined
            : rules({ items, label, ruleExtra }),
          ...formItemCommonProps,
          class: `formItems ${bounceIn} ${itemPropsCls}  `,
        };

        const formLabel = customLabel ? customLabel : getLabel(label, formType);
        // console.log('  formLabel ：', formLabel,  )//

        const placeholder =
          noPh || action === 'detail' || isDisabledAll ? '' : formLabel;
        // conso
        if (searchSuffix) {
          comProps.suffix = <SearchOutlined class="searchIcon" />;
        }
        if (noLabel) {
          // console.log(' noLabel ： ');
          // comProps.wrapperCol = {
          //   sm: { span: 10 },
          // };
        }

        const realComProps = {
          // class: 'w-320',
          placeholder: placeholder,
          ...comDefProps({ formType }),
          ...comProps,
          vModel: [model[itemProps.name], 'value'],
        };

        const dynamicComProps = {
          // class: 'w-320',
          ...comProps,
          // comProps: {...comProps, class: `${comProps.class} dynamiRow` },
          isDisabledAll,
          placeholder: placeholder,
          name: formItemProps.key,
          init: initialValues[comProps?.key],
        };

        // const renderRadioOptions = renderRadioOp(radioData, opType, )
        // const renderSelectOptions = renderSelectOp(selectData, opType, )

        const selectProps = {
          allowClear: true,
          filterOption: true,
          ...realComProps,
          showSearch: true,
        };
        if (formType === 'Search') {
          // selectProps.showArrow = false;
          // selectProps.labelInValue = true;
          selectProps.optionFilterProp =
            selectProps.optionFilterProp || 'children';
          // console.log(' selectSearch ： ', selectProps, item.selectSearch);
          if (item.selectSearch) {
            // Select 添加 showSearch 属性可以实现搜索功能，但是这个搜索是搜的Select的value值的,但是value值在页面上是看不到的
            // selectProps.onSearch = debounce(item.selectSearch, 1500);
            // selectProps.onSearch = item.selectSearch
          }
        }
        // const selectCom = (
        //   <Select {...selectProps}>{renderSelectOp(selectData, opType)}</Select>
        // );

        const vModel = formState[itemProps.name]; // 注意不能声明成变量绑定使用  Uncaught TypeError: Assignment to constant variable.
        const formItemMap = {
          rowText: label,
          Label: LabelCom,
          CustomCom: CustomCom,
          PlainText: (
            <span class={`plainText`} {...comProps}>
              {plainText}
            </span>
          ),
          Divider: (
            <el-divider {...realComProps}>{realComProps?.children}</el-divider>
          ),
          // Divider: <span class={`plainText`} {...comProps}>xxxxxxxxxxx</span>,
          Input: (
            <el-input {...realComProps} vModel={formState[itemProps.name]} />
          ),
          InputNumber: (
            <el-input-number
              {...realComProps}
              vModel={formState[itemProps.name]}
            />
          ),
          Password: (
            <el-input {...realComProps} vModel={formState[itemProps.name]} />
          ),
          TextArea: (
            <el-input {...realComProps} vModel={formState[itemProps.name]} />
          ),
          Select: (
            <el-select {...realComProps} vModel={formState[itemProps.name]}>
              {renderSelectItem(realComProps)}
            </el-select>
          ),
          Search: (
            <el-select {...realComProps} vModel={formState[itemProps.name]}>
              {renderSelectItem(realComProps)}
            </el-select>
          ),
          Switch: (
            <el-switch {...realComProps} vModel={formState[itemProps.name]} />
          ),
          Radio: (
            <el-radio-group
              {...realComProps}
              vModel={formState[itemProps.name]}
            >
              {renderRadioItem(realComProps)}
            </el-radio-group>
          ),
          Checkbox: (
            <el-checkbox-group
              {...realComProps}
              vModel={formState[itemProps.name]}
            >
              {renderCheckboxItem(realComProps)}
            </el-checkbox-group>
          ),
          CheckboxItem: (
            <el-checkbox {...realComProps} vModel={formState[itemProps.name]} />
          ),
          DatePicker: (
            <el-date-picker
              {...realComProps}
              vModel={formState[itemProps.name]}
            />
          ),
          MonthPicker: (
            <el-date-picker
              {...realComProps}
              vModel={formState[itemProps.name]}
            />
          ),
          RangePicker: (
            <el-date-picker
              {...realComProps}
              vModel={formState[itemProps.name]}
            />
          ),
          Rate: (
            <el-rate
              {...realComProps}
              vModel={formState[itemProps.name]}
            ></el-rate>
          ),
          Slider: (
            <el-slider
              {...realComProps}
              vModel={formState[itemProps.name]}
            ></el-slider>
          ),
          Cascader: (
            <el-cascader {...realComProps} vModel={formState[itemProps.name]} />
          ),
          AutoComplete: (
            <el-autocomplete
              {...realComProps}
              vModel={formState[itemProps.name]}
            >
              <el-input />
            </el-autocomplete>
          ),
          TreeSelect: (
            <el-tree-select
              {...realComProps}
              vModel={[formState[itemProps.name], 'value']}
            ></el-tree-select>
          ),
          ...registerComp({ formState }),
        };
        console.log(
          ' realComProps, formItemProps ： ',
          realComProps,
          formItemProps,
        ); //

        const formItemCom = formItemMap[formType];
        // return <el-form-item name={`x${Math.random()}`} rules={[{ required: true, message: 'Please pick an item!' }]} label="Radio.Group">
        //   <el-radio-group >
        //     <el-radio value="a">item 1</el-radio>
        //     <el-radio value="b">item 2</el-radio>
        //     <el-radio value="c">item 3</el-radio>
        //   </el-radio-group>
        // </el-form-item>
        return <el-form-item {...formItemProps}>{formItemCom}</el-form-item>;
      });

      return formItems;
    });

    console.log(' formItems ： ', formItems); //

    const submitForm = formEl => {
      console.log(' submitForm ： ', formEl); //
      if (!formEl) return;
      formEl.value.validate(valid => {
        console.log(' valid ： ', valid); //
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!');
          return false;
        }
      });
    };

    return () => {
      // v-bind={formItemLayout} 注意 如果使用了不支持存在的指令会导致报错  Uncaught (in promise) TypeError: Cannot read property 'deep' of undefined
      return (
        <el-form
          label-width="200px"
          model={formState}
          // model={model}
          ref={formRef}
          {...formItemLayout}
          name={name}
          {...formProps}
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          {ctx.slots.topSlot?.()}

          {/* {ctx.attrs.com}
        {ctx.attrs.formItem} */}

          {formItems.value}

          {ctx.slots.bottomSlot?.()}

          <el-button
            type="primary"
            onClick={() => {
              console.log(' propsFn ： ', props, props.eventAttr, formState);
              // props.propsFn({name: 'zyb', })
              props.eventAttr.propsFn({ name: 'zyb' });
            }}
          >
            propsFn
          </el-button>

          <el-form-item wrapper-col={{ span: 12, offset: 6 }}>
            <el-button
              type="primary"
              onClick={() => {
                submitForm(formRef);
              }}
            >
              Submit
            </el-button>
          </el-form-item>
        </el-form>
      );
    };
  },
});
