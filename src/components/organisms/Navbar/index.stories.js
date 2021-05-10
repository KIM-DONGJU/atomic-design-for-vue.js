import NavBar from './index.vue';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NavBar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<NavBar v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
};