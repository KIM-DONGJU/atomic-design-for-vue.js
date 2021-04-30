<template>
  <div class="molecules-list">
    <div class="input-form-container">
      <h2 class="title">InputForm Example</h2>
      <div class="input-form">
        <InputForm :inputValue="inputValues[0]" :title="inputValues[0].title" />
        <InputForm :inputValue="inputValues[1]" :title="inputValues[1].title" />
        <InputForm :inputValue="inputValues[2]" :title="inputValues[2].title" />
      </div>
    </div>
    <div class="horizontal-link-lisk-container">
      <h2 class="title">HorizontalLinkList Example</h2>
      <div class="horizontal-link-lisk">
        <HorizontalLinkList :links="links" />
      </div>
    </div>
  </div>
</template>

<script>
import InputForm from "../molecules/InputForm.vue";
import HorizontalLinkList from "../molecules/HorizontalLinkList.vue";

export default {
  name: "Atoms",
  components: {
    InputForm,
    HorizontalLinkList,
  },
  data() {
    return {
      inputValues: [
        {
          title: "아이디",
          type: "email",
          placeholder: "email",
          inputClass: "shape-rounded",
        },
        {
          title: "비밀번호",
          type: "password",
          placeholder: "password",
          inputClass: "shape-rounded right",
        },
        {
          type: "textarea",
          placeholder: "no title, type textarea",
        },
      ],
      links: [
        {
          label: "atoms",
          path: "/atoms",
          linkClass: "font-color-black",
        },
        {
          label: "molecules",
          path: "/molecules",
          linkClass: "font-color-red",
        },
        {
          label: "organisms",
          path: "/organisms",
        },
        {
          label: "templates",
          path: "/templates",
          linkClass: "font-color-black",
        },
        {
          label: "pages",
          path: "/pages",
          linkClass: "font-color-black",
        },
      ],
    };
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

.input-form {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}

.horizontal-link-lisk {
  background-color: lightblue;
}
</style>
