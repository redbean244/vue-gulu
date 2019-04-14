<template>
  <div class="g-container" :class="containerClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluContainer',
    data () {
      return {
        containerClass: {
          hasAside: false
        }
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluAside') {
          this.containerClass.hasAside = true
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .g-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    // border: 1px solid red;
    &.hasAside {
      flex-direction: row;
    }
  }
</style> 