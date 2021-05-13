<template> 
    <router-link class="card" :to="card.path">
        <div class="contents">
          <h3>{{ card.title }}</h3>
          <article>
              <p v-for="content in card.subtitle" v-bind:key="content">{{  content  }}</p>
          </article>
          <div class="detail-page">
            <span>상세 보기</span>
            <img src="../../../assets/images/logo/right-arrow.png">
          </div>
        </div>
        <div class="app-logo">
          <AppLogo :src="card.src" />
        </div>
    </router-link>
</template>

<script>
import AppLogo from "../../atoms/AppLogo/index.vue";

export default {
  name: "HorizontalCard",
  components: {
    AppLogo,
  },
  data() {
    return {
    };
  },
  props: {
      card: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border: 1px solid #eeeeee;
  cursor: pointer;
}

.card .contents .detail-page {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.card .contents .detail-page img {
  height: 1rem;
  width: auto;
}

.card .app-logo {
  margin: auto 0;
}
</style>
