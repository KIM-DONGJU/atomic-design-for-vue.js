<template>
  <a v-if="isNewWindow" :class="linkClass" :href="path" target="_blank">
    {{ label }}
  </a>
  <router-link v-else :class="linkClass" :to="path">
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: "AppLink",
  data() {
    return {};
  },
  props: {
    label: String,
    path: String,
    linkClass: String,
    isNewWindow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
a,
router-link {
  color: black;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}
a:hover,
router-link:hover {
  font-weight: bolder;
}

.font-red {
  color: red;
}

.font-white {
  color: white;
}
</style>
