<template>
  <div class="input-form-container">
    <p class="title" v-if="title">{{ title }}</p>
    <AppInput
      :type="inputValue.type"
      :placeholder="inputValue.placeholder"
      :inputClass="inputValue.inputClass"
    />
  </div>
</template>

<script>
import AppInput from "../atoms/AppInput";

export default {
  name: "InputForm",
  components: {
    AppInput,
  },
  data() {
    return {};
  },
  props: {
    title: String,
    inputValue: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-form-container {
  width: 100%;
}

.title {
  font-size: 1rem;
  margin: 0;
  text-align: left;
}
</style>
