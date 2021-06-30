<template>
  <div class="card-section">
    <div class="card" v-for="card in cards" v-bind:key="card">
      <HorizontalCard :card="card" />
    </div>
  </div>
</template>

<script>
import HorizontalCard from "../../molecules/HorizontalCard/index.vue";

export default {
  name: "HorizontalCardSection",
  data() {
    return {
    };
  },
  props: {
    cards: Array,
  },
  components: {
    HorizontalCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.card {
  flex: 1;
}

</style>
