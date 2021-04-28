<template>
  <div class="atoms-list">
    <div class="app-input-container">
      <h2 class="title">AppInput example</h2>
      <div class="app-input">
        <AppInput type="text" placeholder="default" />
        <AppInput type="text" inputClass="left" placeholder="font-left" />
        <AppInput
          type="text"
          inputClass="shape-rounded"
          placeholder="rounded"
        />
        <AppInput
          type="text"
          inputClass="shape-rounded right"
          placeholder="rounded font-right"
        />
      </div>
    </div>
    <div class="app-button-container">
      <h2 class="title">AppButton example</h2>
      <div class="app-button">
        <AppButton label="default" />
        <AppButton label="square" buttonClass="square" />
        <AppButton label="square bg-orange" buttonClass="square bg-orange" />
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "../atoms/AppInput.vue";
import AppButton from "../atoms/AppButton.vue";

export default {
  name: "Atoms",
  components: {
    AppInput,
    AppButton,
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
}

.app-input,
.app-button {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}
</style>
