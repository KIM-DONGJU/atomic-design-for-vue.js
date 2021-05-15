<template>
  <footer>
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
footer > div {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    padding: 40px 0px;
}
html, body, h1, h2, h3, h4, h5, h6, div, p, blockquote, pre, code, address, ul, ol, li, menu, nav, section, article, aside, dl, dt, dd, table, thead, tbody, tfoot, label, caption, th, td, form, fieldset, legend, hr, input, button, textarea, object, figure, figcaption {
    margin: 0;
    padding: 0;
}
* {
    outline: 0 !important;
    box-sizing: border-box;
}
div {
    display: block;
}
footer {
    background: #39424c;
    font-size: 14px;
}
body, input, select, textarea, button {
    border: none;
    font-size: 12px;
    font-family: 'Spoqa Han Sans', sans-serif;
    color: #333;
    font-weight: 300;
    background: transparent;
}
body {
    width: 100%;
    background: #fff;
    min-width: 320px;
    -webkit-text-size-adjust: none;
    word-wrap: break-word;
    word-break: break-all;
}
html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.footer_links {
    display: flex;
    flex-direction: row;
    margin: 0 0 20px 0;
    padding: 0 0 12px 0;
    border-bottom: 1px solid #485561;
    color: #b2bbc3;
    align-items: center;
    justify-content: space-between;
}

footer .sns a img {
  opacity: 0.6;
}

footer .sns a img:hover {
  opacity: 1;
}
</style>