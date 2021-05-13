<template>
  <div class="card-section">
    <article class="title">
      <h3> {{ label }} </h3>
      <p v-for="content in contents" v-bind:key="content">
        {{ content }}
      </p>
    </article>
    <div class="card" v-for="card in cards" v-bind:key="card">
      <VerticalCard :card="card" />
    </div>
  </div>
</template>

<script>
import VerticalCard from "../../molecules/VerticalCard/index.vue";

export default {
  name: "VerticalCardSection",
  data() {
    return {
    };
  },
  props:{
    label: String,
    contents: Array,
    cards: Array,
  },
  components: {
    VerticalCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.title {
  margin: auto 0;
  text-align: center;
  grid-column: 1/4;
}

</style>
