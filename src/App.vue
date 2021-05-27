<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {

  },
  mounted() {
    console.log("Atomic-Design-Template");
  }
};
</script>

<style scoped>
body {
  margin: 0;
}
</style>
