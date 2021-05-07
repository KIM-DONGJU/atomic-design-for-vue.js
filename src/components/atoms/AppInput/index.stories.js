import AppInput from './index.vue';

export default {
  title: 'Atoms/AppInput',
  component: AppInput,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AppInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AppInput v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  type:"text",
  placeholder: "default",
};

export const ShapeSquare = Template.bind({});
ShapeSquare.args = {
  type:"text",
  inputClass:"shape-rounded",
  placeholder: "rounded",
};

export const TextCenter = Template.bind({});
TextCenter.args = {
  type:"text",
  inputClass:"center",
  placeholder: "text: center",
};

export const TextRight = Template.bind({});
TextRight.args = {
  type:"text",
  inputClass:"right",
  placeholder: "text: right",
};