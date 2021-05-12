<template> 
    <div class="card">
        <div class="contents">
          <h3>{{ card.title }}</h3>
          <article>
              <p v-for="content in card.subtitle" v-bind:key="content">{{  content  }}</p>
          </article>
        </div>
        <div class="app-logo">
          <AppLogo :src="card.src" />
        </div>
    </div>
</template>

<script>
import AppLogo from "../../atoms/AppLogo/index.vue";

export default {
  name: "HorizontalCard",
  components: {
    AppLogo,
  },
  data() {
    return {
    };
  },
  props: {
      card: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
}
.card .app-logo {
  margin: auto 0;
}
</style>
