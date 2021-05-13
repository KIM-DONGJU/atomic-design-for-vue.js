import VerticalCardSection from './index.vue';
import frontend from '../../../assets/images/logo/frontend.png';
import backend from '../../../assets/images/logo/backend.png';
import devops from '../../../assets/images/logo/server.png';

export default {
  title: 'Organisms/VerticalCardSection',
  component: VerticalCardSection,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VerticalCardSection },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<VerticalCardSection v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  cards: [
    {
      src:frontend,
      title: "Frontend",
      subtitle: [
        "HTML·CSS·JQuery 웹 퍼블리싱",
        "Vue·React SPA 개발"
      ]
    },
    {
      src:backend,
      title: "Backend",
      subtitle: [
        "SpringBoot·NodeJS API 구축",
        "MySQL DB 스키마 설계"
      ]
    },
    {
      src: devops,
      title: "Devops",
      subtitle: [
        "Linux·AWS 서버 구축",
        "Git 버전관리",
      ]
    }
  ],
  label: "Skills",
  contents: [
    "웹 개발 파트별로 정리한 간략한 기술 스택입니다.",
    "분야별 기술에 대하여 더 자세한 내용은 소개 페이지에서 확인 하실 수 있습니다."
  ]
};