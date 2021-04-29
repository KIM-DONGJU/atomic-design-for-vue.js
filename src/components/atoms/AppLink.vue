<template>
  <a v-if="isNewWindow" class="app-link" :href="path" target="_blank">
    {{ label }}
  </a>
  <router-link v-else class="app-link" :to="path">
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
    isNewWindow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.app-link {
  text-decoration: none;
  transition: all 0.3s;
  color: white;
}
.app-link:hover {
  font-weight: bolder;
}
</style>