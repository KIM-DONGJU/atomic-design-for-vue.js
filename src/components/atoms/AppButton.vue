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
    buttonClass: String,
  },
};
</script>

<style scoped>
/* default style */
button {
  width: 100%;
  border: 0;
  border-radius: 3rem;
  text-align: center;
  background-color: #ffa837;
  color: white;
  cursor: pointer;
}
/* defauat style end*/

/* shape style */
.shape-square {
  border-radius: 5px;
}

/* shape style end*/

/* background color style */
.bg-white {
  background-color: white;
  border: 1px solid darkgray;
  color: black;
}

.bg-gray {
  background-color: rgba(230, 230, 230, 0.96);
  color: #828282;
}

/* background color style  end */

/* font position style */
.left {
  text-align: left;
}

.right {
  text-align: right;
}

/* font position style end*/
</style>