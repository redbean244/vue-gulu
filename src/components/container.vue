<template>
  <div class="container" :class="containerClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluLayout',
    data () {
      return {
        containerClass: {
          hasSider: false
        }
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluSider') {
          this.containerClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    &.hasSider {
      flex-direction: row;
    }
  }
</style> 