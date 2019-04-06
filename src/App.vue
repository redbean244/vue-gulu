<template>
  <div id="app">
    <!-- <router-view/> -->
    <g-Button icon="setting"> 111</g-Button>
    <g-Button icon-position="right" icon="setting"> 111</g-Button>
    <g-Button icon="download"> 111</g-Button>
    <g-icon name="download"></g-icon>
  </div>
</template>

<script>
import gButton from './components/button.vue'
import gIcon from './components/icon.vue'
export default {
  name: 'App',
  components:{
    gButton,gIcon
  },
  mounted() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//at.alicdn.com/t/font_1127796_uyhosru6kk.js';
    document.body.appendChild(s);
  }
}
</script>

<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
#app {
  margin: 20px;
}
body {
  font-size: var(--font-size);
}

</style>
