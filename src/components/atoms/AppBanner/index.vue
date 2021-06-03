<template>
  <img :src="image">
</template>

<script>
export default {
  name: "AppButton",
  data() {
    return {};
  },
  props: {
    image: String,
  },
};
</script>

<style scoped>
/* default style */
.banner img {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: block;
  height: 100%;
}

/* font position style end*/
</style>