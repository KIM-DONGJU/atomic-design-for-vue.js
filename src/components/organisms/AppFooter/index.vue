<template>
  <section>
    <div class="footer-link">
      <div class="brand">
        <div class="brand-name">
          <span>김동주</span>
        </div>
        <div class="policy">
          <AppLink path="/" isNewWindow="true" label="개인정보 처리 방침" linkClass="font-white"/>
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
    <div class="copyright">
      <span>Copyright ⓒ 2021 KIMDONGJU All Rights Reserved.</span>
    </div>
	</section>
</template>

<script>
import AppLink from "../../atoms/AppLink/index.vue";

export default {
  name: "AppFooter",
  data() {
    return {
    };
  },
  props: {
  },
  components: {
    AppLink,
  },
};

</script>

<style scoped>
span,
a {
  font-size: 1.5rem;
}

section {
  padding: 20px;
  background-color: #39424c;
  color: white;
}

section > div {
  width: 90%;
  max-width: 1200px;
  min-width: 300px;
}

section .footer-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #485561;
  margin: 0 auto;
}

section .footer-link .brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

section .footer-link .sns {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

section .footer-link .sns a {
  width: 25%;
}

section .footer-link .sns a img {
  width: 100%;
  opacity: 0.6;
}

section .footer-link .sns a img:hover {
  opacity: 1;
}

section .info {
  margin: 15px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  color: #647586;
}

section .copyright {
  margin: 10px auto 0 auto;
  padding-bottom: 15px;
}

section .info span:nth-child(n):nth-child(-n+3)::after {
  content: "|";
  margin-left: 15px;
}

@media screen and (max-width: 750px) {
  section .footer-link {
    display: grid;
    grid-auto-columns: 1fr;
    gap: 20px;
  }

  section .footer-link .brand {
    flex-direction: column;
    align-items: flex-start;
  }

  section .footer-link .sns {
    justify-content: flex-start;
  }

  section .footer-link .sns a {
    width: 10%;
  }

  section .info {
    display: grid;
    grid-template-columns: 1fr;
  }

  section .info span:nth-child(n):nth-child(-n+3)::after {
    content: "";
  }
}

</style>
