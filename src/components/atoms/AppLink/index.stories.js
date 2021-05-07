import AppLink from './index.vue';

export default {
  title: 'Atoms/AppLink',
  component: AppLink,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AppLink },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AppLink v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  label: "git-hub",
  path: "https://github.com/KIM-DONGJU",
};

export const FontBlack = Template.bind({});
FontBlack.args = {
  label: "git-hub",
  path: "https://github.com/KIM-DONGJU",
  linkClass: "font-black",
};

export const FontRed = Template.bind({});
FontRed.args = {
  label: "git-hub",
  path: "https://github.com/KIM-DONGJU",
  linkClass: "font-red",
};

export const NewWindowTrueAndFontBlack = Template.bind({});
NewWindowTrueAndFontBlack.args = {
  label: "git-hub",
  path: "https://github.com/KIM-DONGJU",
  linkClass: "font-red",
  isNewWindow: "True"
};