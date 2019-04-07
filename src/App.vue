<template>
  <div id="app">
    <!-- <router-view/> -->
    <g-Button icon="setting"> 111</g-Button>
    <g-Button icon-position="right" icon="setting"> 111</g-Button>
    <g-Button icon="download" :loading="isLoading" @click="isLoading = !isLoading"> 111</g-Button>
     <g-button-group>
    <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>
</template>

<script>
import gButton from './components/button.vue'
import gIcon from './components/icon.vue'
import gButtonGroup from './components/buttonGroup.vue'
export default {
  name: 'App',
  data:function(){
    return {
        isLoading: true 
    }
  },
  components:{
    gButton,gIcon,gButtonGroup
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
* {margin: 0; padding: 0; box-sizing: border-box;}

@buttonHeight: 32px;
@fontSize: 14px;
@buttonBg: white;
@buttonActiveBg: #eee;
@borderRadius: 4px;
@color: #333;
@borderColor: #999;
@borderColorHover: #666;

#app {
  margin: 20px;
}
body {
  font-size: @fontSize;
}

</style>
