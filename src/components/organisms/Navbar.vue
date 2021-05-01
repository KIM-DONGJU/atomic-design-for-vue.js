<template>
  <div class="nav-bar">
    <div class="logo">
      <AppLogo logoClass="middle" />
    </div>
    <div class="nav">
      <HorizontalLinkList :links="links" />
    </div>
  </div>
</template>

<script>
import AppLogo from "../atoms/AppLogo";
import HorizontalLinkList from "../molecules/HorizontalLinkList";

export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          label: "atoms",
          path: "/atoms",
          linkClass: "font-color-black",
        },
        {
          label: "molecules",
          path: "/molecules",
          linkClass: "font-color-black",
        },
        {
          label: "organisms",
          path: "/organisms",
          linkClass: "font-color-black",
        },
        {
          label: "templates",
          path: "/templates",
          linkClass: "font-color-black",
        },
        {
          label: "pages",
          path: "/pages",
          linkClass: "font-color-black",
        },
      ],
    };
  },
  components: {
    AppLogo,
    HorizontalLinkList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo {
  flex: 1;
}

.nav {
  flex: 9;
}
</style>
