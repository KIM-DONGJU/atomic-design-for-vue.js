import InputForm from './index.vue';

export default {
  title: 'Molecules/InputForm',
  component: InputForm,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { InputForm },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<InputForm v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  title:"Input-Form",
  input: {
    type: "email",
    placeholder:"email",
    inputClass: ""
  }
};