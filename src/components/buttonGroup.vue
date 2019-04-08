<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted () {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="less">
   @import url('../assets/css/base.less');
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: 1px;
      }
      &:first-child {
        border-top-left-radius: @borderRadius;
        border-bottom-left-radius: @borderRadius;
      }
      &:last-child {
        border-top-right-radius: @borderRadius;
        border-bottom-right-radius: @borderRadius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>