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
    inputClass: String,
  },
};
</script>
<style scoped>
/* default style */
input {
  width: 100%;
  border: 1px solid darkgray;
  border-radius: 5px;
  text-align: center;
}
/* default style end*/

/* shape style */
.shape-rounded {
  border-radius: 2rem;
}

/* shape style end */

/* placeholder text style */
.left::placeholder {
  text-align: left;
}

.right::placeholder {
  text-align: right;
}

/* placeholder text style end */
</style>
