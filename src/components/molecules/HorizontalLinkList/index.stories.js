import HorizontalLinkList from './index.vue';

export default {
  title: 'Molecules/HorizontalLinkList',
  component: HorizontalLinkList,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HorizontalLinkList },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<HorizontalLinkList v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
    links: [
      {
        label: "git-hub",
        path: "https://github.com/KIM-DONGJU",
        isNewWindow: true,
        linkClass:"font-black",
      },
      {
        label: "naver",
        path: "https://www.naver.com",
        isNewWindow: true,
        linkClass:"font-black",
      },
      {
        label: "youtube",
        path: "https://www.youtube.com",
        isNewWindow: true,
        linkClass:"font-red",
      }
    ]
};