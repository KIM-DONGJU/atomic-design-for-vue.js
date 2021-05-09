import AppLogo from './index.vue';

export default {
  title: 'Atoms/AppLogo',
  component: AppLogo,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AppLogo },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AppLogo v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
};

export const Middle = Template.bind({});
Middle.args = {
    logoClass:"middle"
};

export const Small = Template.bind({});
Small.args = {
    logoClass:"small"
};