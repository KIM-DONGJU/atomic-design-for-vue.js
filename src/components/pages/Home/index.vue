<template>
  <div class="home">
    <header>
      <Navbar />
    </header>
    <div class="vertical-cards">
      <VerticalCardSection :cards="verticalCards" :label="label" :contents="contents"/>
    </div>
    <div class="horizontal-cards">
      <HorizontalCardSection :cards="horizontalCards" />
    </div>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import Navbar from "../../organisms/Navbar/index.vue";
import VerticalCardSection from "../../organisms/VerticalCardSection/index.vue";
import HorizontalCardSection from "../../organisms/HorizontalCardSection/index.vue";
import AppFooter from "../../organisms/AppFooter/index.vue";

import frontend from '../../../assets/images/logo/frontend.png';
import backend from '../../../assets/images/logo/backend.png';
import devops from '../../../assets/images/logo/server.png';
import company from '../../../assets/images/logo/company.png';
import personal from '../../../assets/images/logo/personal.png';


export default {
  name: "Home",
  data() {
    return {
      verticalCards: [
        {
          src: frontend,
          title: "Frontend",
          subtitle: [
            "HTML·CSS·JQuery 웹 퍼블리싱",
            "Vue·React SPA 개발"
          ]
        },
        {
          src: backend,
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
      ],
      horizontalCards: [
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
  },
  props:{
  },
  components: {
    Navbar,
    VerticalCardSection,
    HorizontalCardSection,
    AppFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding: 0;
}

.home .vertical-cards,
.home .horizontal-cards {
  width: 1080px;
  margin: 100px auto 0 auto;
}

.home footer {
  margin-top: 100px;
}
</style>
