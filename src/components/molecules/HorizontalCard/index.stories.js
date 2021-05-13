import HorizontalCard from './index.vue';
import company from '../../../assets/images/logo/company.png'

export default {
  title: 'Molecules/HorizontalCard',
  component: HorizontalCard,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HorizontalCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<HorizontalCard v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  card:
    {
      src: company,
      title: "company",
      subtitle: [
        "HTML·CSS·JQuery 웹 퍼블리싱",
        "Vue·React SPA 개발",
      ],
      path: "/"
    },
};