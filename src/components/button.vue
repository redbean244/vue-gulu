<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`] : true }" @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon v-if="loading" name="loading" class="loading icon"></g-icon>
    <div class="contents">
        <slot></slot>
    </div>
  </button>
</template>

<script>
import gIcon from './icon'

export default {
  name: 'g-button',  
  props:{
    icon:{},
    iconPosition:{
      type:String,
      default: "left",
      //属性的检查器
      validator (value) {
        return value === 'left' || value === 'right'
      }
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  components:{
    gIcon
  }
}
</script>

<style lang="less" scoped>
@keyframes spin{
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}

@buttonHeight: 32px;
@fontSize: 14px;
@buttonBg: white;
@buttonActiveBg: #eee;
@borderRadius: 4px;
@color: #333;
@borderColor: #999;
@borderColorHover: #666;

.g-button {
  font-size: @fontSize;
  height: @buttonHeight;
  padding: 0 1em;
  border-radius: @borderRadius;
  border: 1px solid @borderColor;
  background: @buttonBg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: @borderColorHover;
  }
  &:active {
    background-color: @buttonActiveBg;
  }
  &:focus {
    outline: none;
  }
  > .contents{
    order: 2;
  }
  > .icon{
    order: 1;
    margin-right: .3em;
  }

  &.icon-right{
    > .contents{
      order: 1;
    }
    > .icon{
      order: 2;
      margin-left: .3em;
      margin-right: 0;
    }
  }
  .loading{
    animation: spin 1s infinite linear;
  }
}

</style>
