import VerticalCard from './index.vue';
import frontend from '../../../assets/images/logo/frontend.png'

export default {
  title: 'Molecules/VerticalCard',
  component: VerticalCard,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VerticalCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<VerticalCard v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  cards:
    {
      src: frontend,
      title: "Frontend",
      subtitle: [
        "HTML·CSS·JQuery 웹 퍼블리싱",
        "Vue·React SPA 개발",
      ]
    }
};