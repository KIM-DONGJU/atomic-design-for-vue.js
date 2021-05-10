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
.horizontal-link-list {
  width: 100%;
}

.horizontal-link-list ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
.horizontal-link-list ul li {
  flex: 1;
  text-align: center;
}
</style>
