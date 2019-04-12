<template>
  <div id="app">
      <div style="border: 1px solid black;">

        <g-row gutter="20">
          <g-col>1</g-col>
          <g-col>2</g-col>
        </g-row>
        <g-row gutter="20">
          <g-col>1</g-col>
          <g-col>2</g-col>
          <g-col>3</g-col>
        </g-row>
        <g-row gutter="20">
          <g-col>1</g-col>
          <g-col>2</g-col>
          <g-col>3</g-col>
          <g-col>4</g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="2">1</g-col>
          <g-col span="20" offset="2">11</g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="4">1</g-col>
          <g-col span="20">11</g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="4">1</g-col>
          <g-col span="18" offset="2">11</g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="4">1</g-col>
          <g-col span="8" offset="2">11</g-col>
          <g-col span="8" offset="2">11</g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="4">1</g-col>
          <g-col span="4" offset="6">11</g-col>
          <g-col span="8" offset="2">11</g-col>
        </g-row>
      </div>
  </div>


</template>

<script>
import gButton from './components/button.vue'
import gIcon from './components/icon.vue'
import gButtonGroup from './components/buttonGroup.vue'
import gInput from './components/input.vue'
import gRow from './components/row.vue'
import gCol from './components/col.vue'
export default {
  name: 'App',
  data(){
    return {
      message:1
    }
  },
  components:{
    gButton,gIcon,gButtonGroup,gInput,gRow,gCol
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
