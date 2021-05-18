<template>
  <footer>
    <div class="footer-link">
      <div class="brand">
        <div class="brand-name">
          <span>김동주</span>
        </div>
        <div class="policy">
          <AppLink path="/" isNewWindow="true" label="개인정보 처리 방침" />
        </div>
      </div>
      <div class="sns">
        <a href="kdj0689@gmail.com">
          <img src="../../../assets/images/logo/email.png">
        </a>
        <a href="/">
          <img src="../../../assets/images/logo/kakao.png">
        </a>
        <a href="https://github.com/KIM-DONGJU">
          <img src="../../../assets/images/logo/git.png">
        </a>
      </div>
    </div>
    <div class="info">
      <span>김동주</span>
      <span>이메일 kdj0689@gmail.com</span>
      <span>카카오톡 kdj0689</span>
      <span>깃허브 KIM-DONGJU</span>
    </div>
	</footer>
</template>

<script>
import AppLink from "../../atoms/AppLink/index.vue";

export default {
  name: "AppFooter",
  data() {
    return {
    };
  },
  props:{
  },
  components: {
    AppLink,
  },
};

</script>

<style scoped>
footer .footer-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #485561;
}

footer .footer-link .brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}


footer .footer-link .sns a img {
  opacity: 0.6;
}

footer .footer-link .sns a img:hover {
  opacity: 1;
}

footer .info {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
}
</style>