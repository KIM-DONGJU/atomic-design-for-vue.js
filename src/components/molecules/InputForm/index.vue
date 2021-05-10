<template>
  <div class="input-form-container">
    <p class="title" v-if="title">{{ title }}</p>
    <AppInput
      :type="input.type"
      :placeholder="input.placeholder"
      :inputClass="input.inputClass"
    />
  </div>
</template>

<script>
import AppInput from "../../atoms/AppInput/index.vue";

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
    input: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 1rem;
  margin: 0;
  text-align: left;
}
</style>
