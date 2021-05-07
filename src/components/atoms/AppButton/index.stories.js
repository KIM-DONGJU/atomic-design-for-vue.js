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
  template: '<AppButton v-bind="args" style="width: 20%;/>'
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const ShapeSquare = Template.bind({});
ShapeSquare.args = {
  label: 'shape square',
  buttonClass: 'shape-square'
};

export const BackgroundWhite = Template.bind({});
BackgroundWhite.args = {
  label: 'background white',
  buttonClass: 'bg-white'
};

export const BackgroundGray = Template.bind({});
BackgroundGray.args = {
  label: 'background gray',
  buttonClass: 'bg-gray'
};

export const TextLeft = Template.bind({});
TextLeft.args = {
  label: 'text left',
  buttonClass: 'left'
};

export const BackgroundWhiteAndTextRight = Template.bind({});
BackgroundWhiteAndTextRight.args = {
  label: 'text left',
  buttonClass: 'bg-white right'
};