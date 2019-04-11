<template>
  <div id="app">
        <g-input v-model="message"></g-input>
        <p>{{message}}</p>
  </div>


</template>

<script>
import gButton from './components/button.vue'
import gIcon from './components/icon.vue'
import gButtonGroup from './components/buttonGroup.vue'
import gInput from './components/input.vue'
export default {
  name: 'App',
  data(){
    return {
      message:1
    }
  },
  components:{
    gButton,gIcon,gButtonGroup,gInput
  },
  mounted() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//at.alicdn.com/t/font_1127796_nndyhd11k3.js';
    document.body.appendChild(s);
  }
}
</script>

<style lang="less">

 

</style>
