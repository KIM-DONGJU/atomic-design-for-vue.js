<template>
  <div class="organisms-list">
    <div class="navbar-container">
      <h2 class="title">Navbar Example</h2>
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from "../organisms/Navbar.vue";

export default {
  name: "Atoms",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
}
</style>
