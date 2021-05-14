<template>
  	<footer>
	  <div>
	    <div class="footer_links">
	      <div class="brand">
	        <span>김동주</span>
	      </div>
	      <div class="policy">
	        <a href="/policy">개인정보 처리 방침</a>
	      </div>
	      <div class="sns">
	        <a href="kdj0689@gmail.com" title="이메일">
	          <img src="@/assets/images/mail.png" alt="이메일">
	        </a>
	        <a href="" title="카카오톡">
	          <img src="@/assets/images/kakao.png" alt="카카오톡">
	        </a>
	        <a href="https://github.com/opzyra" target="_blank" title="깃허브">
	          <img src="@/assets/images/git.png" alt="깃허브">
	        </a>
	      </div>
	    </div>
	    <div class="info">
	      <span><strong>김동주</strong></span>
	      <span>이메일 kdj0689@gmail.com</span>
	      <span class="visual_pc">카카오톡 kdj0689</span>
	      <span>깃허브 KIM-DONGJU</span>
	      <div>Copyright ⓒ 2021 Devhyun All Rights Reserved.</div>
	    </div>
	  </div>
	</footer>
</template>

<script>
export default {

}
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
</style>