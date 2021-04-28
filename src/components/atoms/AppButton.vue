<template>
  <button :class="buttonClass">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  data() {
    return {};
  },
  props: {
    label: String,
    buttonClass: {
      type: String,
      default: "rounded bg-orange",
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  border: 0;
}

.rounded {
  border-radius: 3rem;
}

.square {
  border-radius: 5px;
}

.bg-orange {
  background-color: #ffa837;
  color: white;
}
</style>