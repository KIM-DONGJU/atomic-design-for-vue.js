<template>
  <div class="nav-bar">
    <div class="menu">
      <AppLogo logoClass="small" :src="logo" />
      <HorizontalLinkList :links="links" />
    </div>
    <div class="login">
      <Login />
    </div>
  </div>
</template>

<script>
import AppLogo from "../../atoms/AppLogo/index.vue";
import HorizontalLinkList from "../../molecules/HorizontalLinkList/index.vue";
import Login from "../../molecules/Login/index.vue";
import logo from "../../../assets/images/logo/atomic-design.png";

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
      logo: logo,
    };
  },
  components: {
    AppLogo,
    HorizontalLinkList,
    Login,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  position: fixed;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  display: flex;
  align-items: center;
  background-color: white;
}

.menu {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  text-align: center;
}

</style>
