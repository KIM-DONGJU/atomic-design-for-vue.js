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
    type: String,
    inputClass: String,
    placeholder: String,
  },
};
</script>
<style scoped>
/* default style */
input {
  border: 1px solid darkgray;
  border-radius: 5px;
}

input::placeholder {
  text-align: left;
}
/* default style end*/

/* shape style */
.shape-rounded {
  border-radius: 2rem;
}

/* shape style end */

/* placeholder text style */
.center::placeholder {
  text-align: center;
}

.right::placeholder {
  text-align: right;
}

/* placeholder text style end */
</style>
