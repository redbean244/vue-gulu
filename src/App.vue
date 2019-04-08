<template>
  <div id="app">
        <div class="box">
          <g-input value="张三" disabled></g-input>
          <g-input value="李四" readonly></g-input>
          <g-input value="王五"></g-input>
        </div>
        <div class="box">
          <g-input value="王" error="姓名不能少于两个字"></g-input>
        </div> 
</div>


</template>

<script>
import gButton from './components/button.vue'
import gIcon from './components/icon.vue'
import gButtonGroup from './components/buttonGroup.vue'
import gInput from './components/input.vue'
export default {
  name: 'App',
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
