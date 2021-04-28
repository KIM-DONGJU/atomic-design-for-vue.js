<template>
  <input :class="inputClass" :type="type" :placeholder="placeholder" />
</template>
<script>
export default {
  name: "AppInput",
  data() {
    return {};
  },
  props: {
    inputClass: {
      type: String,
      default: "square center",
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  border: 1px solid darkgray;
}

.shape-square {
  border-radius: 5px;
}

.shape-rounded {
  border-radius: 2rem;
}

.center::placeholder {
  text-align: center;
}

.left::placeholder {
  text-align: left;
}

.right::placeholder {
  text-align: right;
}
</style>
