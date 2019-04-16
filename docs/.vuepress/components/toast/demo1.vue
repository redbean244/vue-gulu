<template>
  <div id="app">
      <g-button @click="showToast1">上方弹出</g-button>
      <g-button @click="showToast2">中间弹出</g-button>
      <g-button @click="showToast3">下方弹出</g-button>
  </div>
</template>

<script>
import Vue from 'vue'
import gToast from '../../../../src/components/toast.vue'
import gButton from '../../../../src/components/button.vue'
import plugin from '../../../../src/assets/js/plugin.js'
Vue.use(plugin)
export default {
  name: 'App',
  components:{
    gToast,gButton
  },
  methods: {
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast('点击弹出提示', {
        position,
        autoClose: 2,
      })
    }
  }
}
</script>

<style lang="less">


</style>
