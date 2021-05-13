import HorizontalCardSection from './index.vue';
import company from '../../../assets/images/logo/company.png';
import personal from '../../../assets/images/logo/personal.png';

export default {
  title: 'Organisms/HorizontalCardSection',
  component: HorizontalCardSection,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HorizontalCardSection },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<HorizontalCardSection v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  cards: [
    {
        src: company,
        title: "회사 프로젝트",
        subtitle: [
            "HTML·CSS·JQuery 웹 퍼블리싱",
            "Vue·React SPA 개발",
        ],
        path: "/"
    },
    {
        src: personal,
        title: "개인 프로젝트",
        subtitle: [
        "SpringBoot·NodeJS API 구축",
        "MySQL DB 스키마 설계"
        ],
        path: "/"
    },
  ],
};