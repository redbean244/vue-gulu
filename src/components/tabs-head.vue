<template>
  <div class="tabs-head">
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <slot name="actions"></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created () {
      this.$emit('update:selected', 'tabs-head 抛出的数据')
    }
  }
</script>

<style scoped lang="less">
  @tab-height: 40px;
  .tabs-head {
    display: flex;
    height: @tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style> 