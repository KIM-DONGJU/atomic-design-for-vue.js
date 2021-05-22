<template>
  <div class="login-container">
    <div class="app-logo">
      <AppLogo :src="src" logoClass="small right"/>
    </div>
    <div class="label"> 
      <AppLink path="/" label="로그인" />
    </div>
  </div>
</template>

<script>
import AppLogo from "../../atoms/AppLogo/index.vue";
import AppLink from "../../atoms/AppLink/index.vue";
import logo from '../../../assets/images/logo/login.png'

export default {
  name: "Login",
  components: {
    AppLogo,
    AppLink,
  },
  data() {
    return {
      src: logo,
    };
  },
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  display: flex;
  align-items: center;
  gap:10px;
}

.app-logo {
  flex:3;
}

.label {
  flex:2;
}
</style>
