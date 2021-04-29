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
        <AppButton label="bg white" buttonClass="bg-white" />
        <AppButton
          label="shape square and bg gray"
          buttonClass="shape-square bg-gray"
        />
      </div>
    </div>
    <div class="app-link-container">
      <h2 class="title">AppLink example</h2>
      <div class="app-link">
        <AppLink path="localhost:8080" label="Home" />
        <AppLink
          path="https://www.naver.com"
          label="Naver"
          isNewWindow="true"
        />
        <AppLink
          path="https://www.facebook.com"
          label="Facebook"
          isNewWindow="true"
        />
        <AppLink
          path="https://www.youtube.com"
          label="Youtube"
          isNewWindow="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "../atoms/AppInput.vue";
import AppButton from "../atoms/AppButton.vue";
import AppLink from "../atoms/AppLink.vue";

export default {
  name: "Atoms",
  components: {
    AppInput,
    AppButton,
    AppLink,
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
.app-link {
  box-shadow: 0 0 0.9375rem 0.25rem rgb(34 35 36 / 5%);
  background: rgba(0, 0, 0, 0.5);
}
.app-input,
.app-button,
.app-link {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}
</style>
