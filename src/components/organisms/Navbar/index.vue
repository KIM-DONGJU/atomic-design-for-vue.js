<template>
  <div class="nav-bar">
    <div class="logo">
      <AppLogo logoClass="middle" />
    </div>
    <div class="nav">
      <HorizontalLinkList :links="links" />
    </div>
  </div>
</template>

<script>
import AppLogo from "../../atoms/AppLogo/index.vue";
import HorizontalLinkList from "../../molecules/HorizontalLinkList/index.vue";

export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          label: "소개",
          path: "/",
        },
        {
          label: "프로젝트",
          path: "/",
        },
        {
          label: "블로그",
          path: "/",
        },
        {
          label: "깃허브",
          path: "https://github.com/KIM-DONGJU",
          isNewWindow: true,
        },
      ],
    };
  },
  components: {
    AppLogo,
    HorizontalLinkList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

.logo {
  margin: auto 0;
  flex: 1;
}

.nav {
  flex: 9;
}
</style>
