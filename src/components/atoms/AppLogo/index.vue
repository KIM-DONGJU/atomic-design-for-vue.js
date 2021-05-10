<template>
  <div :class="logoClass">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: "AppLogo",
  data() {
    return {};
  },
  props: {
    logoClass: String,
    src: String,
  },
};
</script>

<style scoped>
.right {
  text-align: right;
}

.left {
  text-align: left;
}

.large img{
  vertical-align: middle;
  width: 100%;
}

.middle img{
  vertical-align: middle;
  width: 50%;
}

.small img{
  vertical-align: middle;
  width: 25%;
}

</style>