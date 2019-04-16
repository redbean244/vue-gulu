<template>
  <div id="app">
      <g-button @click="showToast">中间弹出</g-button>
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
    showToast(position){
      this.$toast('点击弹出提示', {
        position : "middle",
        closeButton: {
          text: '关闭',
          callback () {
            console.log('关闭了')
          }
        },
        autoClose: false,
      })
    }
  }
}
</script>

<style lang="less">


</style>
