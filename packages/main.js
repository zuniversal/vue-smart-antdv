import Components from './index';

Components.SmartForm.install = Vue => {
  Vue.component('SmartForm', Components.SmartForm);
};

export default {
  SmartForm: Components.SmartForm,
};
