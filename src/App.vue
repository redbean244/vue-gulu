<template>
  <div id="app">
    <div>
      <g-button>默认按钮</g-button>
      <g-button type="primary">主要按钮</g-button>
      <g-button type="success">成功按钮</g-button>
      <g-button type="info">信息按钮</g-button>
      <g-button type="warning">警告按钮</g-button>
      <g-button type="danger">危险按钮</g-button>
    </div>

    <div style="margin: 20px 0">
      <g-button plain>朴素按钮</g-button>
      <g-button type="primary" plain>主要按钮</g-button>
      <g-button type="success" plain>成功按钮</g-button>
      <g-button type="info" plain>信息按钮</g-button>
      <g-button type="warning" plain>警告按钮</g-button>
      <g-button type="danger" plain>危险按钮</g-button>
    </div>

    <div>
      <g-button round>圆形按钮</g-button>
      <g-button type="primary" round>主要按钮</g-button>
      <g-button type="success" round>成功按钮</g-button>
      <g-button type="info" round>信息按钮</g-button>
      <g-button type="warning" round>警告按钮</g-button>
      <g-button type="danger" round>危险按钮</g-button>
    </div>
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
  }
}
</script>

<style lang="less">

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
