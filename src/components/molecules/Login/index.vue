<template>
  <div class="login-container">
    <AppLogo path="">
  </div>
</template>

<script>
import AppLogo from "../../atoms/AppLogo/index.vue";

export default {
  name: "Login",
  components: {
    AppLogo,
  },
  data() {
    return {};
  },
  props: {
    title: String,
    input: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 1rem;
  margin: 0;
  text-align: left;
}
</style>
