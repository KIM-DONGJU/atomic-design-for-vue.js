<template>
  <div class="app-logo">
    <img :src="path" :class="logoClass" />
  </div>
</template>

<script>
export default {
  name: "AppLogo",
  data() {
    return {};
  },
  props: {
    logoClass: {
      type: String,
      default: "large",
    },
    path: String,
  },
};
</script>

<style scoped>
.app-logo {
  width: 100%;
  text-align: center;
}

.app-logo img {
  object-fit: contain;
}

.large {
  width: 100%;
}

.middle {
  width: 50%;
}

.small {
  width: 25%;
}
</style>