<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
    },
    data () {
      return {
        gutter: 0,
      }
    },
    computed: {
      colClass () {
        let {span, offset} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`
        ]
      },
      colStyle () {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .col {
    width: 50%;
    @class-prefix: col-;
    .loop(@n) when (@n < 24){
        &#col-@{n}{
           width: (@n / 24) * 100%;
        }
        &.offset-@{n} {
           margin-left: (@n / 24) * 100%;
        }
        .loop(@n+1);
    }
    .loop(1);
  }
</style> 