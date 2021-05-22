<template>
  <div class="horizontal-link-list">
    <ul>
      <li v-for="link in links" :key="link.label">
        <AppLink
          :label="link.label"
          :path="link.path"
          :linkClass="link.linkClass"
          :isNewWindow="link.isNewWindow"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import AppLink from "../../atoms/AppLink/index.vue";

export default {
  name: "HorizontalLinkList",
  components: {
    AppLink,
  },
  data() {
    return {};
  },
  props: {
    links: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.horizontal-link-list ul {
  padding-left: 0px;
  margin: 0 50px;
  display: flex;
  gap: 50px;
}
.horizontal-link-list ul li {
  display: inline-block;
}
</style>
