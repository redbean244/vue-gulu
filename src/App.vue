<template>
  <div id="app">
    <div>
        <g-button icon="setting"></g-button>
        <g-button type="primary" icon="download" iconPosition="right">下载</g-button>
        <g-button type="primary" icon="thumbs_up">赞</g-button>
        <g-button type="primary" icon="up"></g-button>
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
