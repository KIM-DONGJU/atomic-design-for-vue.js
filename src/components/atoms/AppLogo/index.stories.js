import AppLogo from './index.vue';
import src from '../../../assets/images/logo/atomic-design.png'

export default {
  title: 'Atoms/AppLogo',
  component: AppLogo,
  argTypes: {
      logoClass: {
          control: {
              type: 'inline-check',
              options: ['large', 'middle', 'small', 'left','right']
          }
      }
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
  src: src
};

export const Middle = Template.bind({});
Middle.args = {
  logoClass:"middle",
  src: src,
};

export const Small = Template.bind({});
Small.args = {
  logoClass:"small",
  src: src,
};