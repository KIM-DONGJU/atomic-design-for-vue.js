import AppButton from './index.vue';

export default {
  title: 'Atoms/AppButton',
  component: AppButton,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AppButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AppButton v-bind="args" style="width: 10%"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const brimary = Template.bind({});
brimary.args = {
  label: 'Button2',
};