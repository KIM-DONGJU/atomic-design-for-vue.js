<template> 
    <div class="card">
        <AppLogo :src="card.src" />
        <h3>{{ card.title }}</h3>
        <article>
            <p v-for="content in card.subtitle" v-bind:key="content">{{  content  }}</p>
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
      card: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    text-align: center;
}
</style>
