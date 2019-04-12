<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
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
        gutter: 0
      }
    },
    created () {
      console.log('col created')
    },
    mounted () {
      console.log('col mounted')
    },
  }
</script>
<style scoped lang="less">
  .col {
    // height: 100px;
    // background: grey;
    width: 50%;
    // border: 1px solid red;
    @class-prefix: col-;
    // @for $n from 1 through 24 {
    //   &.#{$class-prefix}#{$n} {
    //     width: ($n / 24) * 100%;
    //   }
    // }
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