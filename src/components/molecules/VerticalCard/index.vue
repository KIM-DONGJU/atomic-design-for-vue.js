<template> 
    <div class="card">
        <AppLogo :src="cards.src" />
        <h3>{{ cards.title }}</h3>
        <article>
            <p v-for="content in cards.subtitle" v-bind:key="content">{{  content  }}</p>
        </article>
    </div>
</template>

<script>
import AppLogo from "../../atoms/AppLogo/index.vue";

export default {
  name: "VerticalCard",
  components: {
    AppLogo,
  },
  data() {
    return {
    };
  },
  props: {
      cards: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    text-align: center;
}
</style>
