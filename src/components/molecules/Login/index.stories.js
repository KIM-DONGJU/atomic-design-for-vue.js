import Login from './index.vue';

export default {
  title: 'Molecules/Login',
  component: Login,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Login },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Login v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
};