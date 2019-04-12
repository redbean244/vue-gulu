<template>
  <div>
      <g-row class="demoRow" gutter="10">
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
      </g-row>

      <g-row class="demoRow" gutter="10">
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
      </g-row>
  </div>
</template>

<script>
import gRow from '../../../../src/components/row.vue'
import gCol from '../../../../src/components/col.vue'
export default {
  name: 'layout-demo2',
  data(){
    return {
      message:1
    }
  },
  components:{
    gRow,gCol
  }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

.demoRow{
    margin: 10px 0;
    .demoCol{
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
}

</style>
