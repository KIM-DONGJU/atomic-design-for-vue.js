<template>
  <div class="nav-bar">
    <div class="logo">
      <AppLogo logoClass="small" :src="logo" />
    </div>
    <div class="nav">
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
import logo from '../../../assets/images/logo/atomic-design.png'

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
  width: 1080px;
  display: flex;
  align-items: center;
}

.logo {
  text-align: center;
  flex: 1;
}

.nav {
  flex: 4;
}

.login {
  margin: auto 0;
  text-align: right;
  flex: 1;
}
</style>
