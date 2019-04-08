<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`] : true ,[type] : true ,icon , plain , round , disabled}" :disabled = "disabled">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon v-if="icon && loading" name="loading" class="loading icon"></g-icon>
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
    icon:{
      type: String,
      default: ""
    },
    iconPosition:{
      type:String,
      default: "left",
      //属性的检查器
      validator (value) {
        return value === 'left' || value === 'right'
      }
    },
    type:{
      type:String,
      default: ""
    },
    plain:{
      type:Boolean,
      default: false
    },
    round:{
      type:Boolean,
      default: false
    },
    loading:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  components:{
    gIcon
  },
  // mounted() {
  //   const s = document.createElement('script');
  //   s.type = 'text/javascript';
  //   s.src = '//at.alicdn.com/t/font_1127796_ny4iq38fru9.js';
  //   document.body.appendChild(s);
  // }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/base.less');
@import url('../assets/css/reset.less');

@keyframes spin{
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}


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
    border-color: @primary;
    color: @primary;
    opacity: .6;
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

  &.primary{
    background-color: @primary;
    border: 1px solid @primary;
    color: #fff;
    svg{
      fill: #fff;;
    }
  }
  &.success{
    background-color: @success;
    border: 1px solid @success;
    color: #fff;
    svg{
      fill: #fff;;
    }
  }
  &.info{
    background-color: @info;
    border: 1px solid @info;
    color: #fff;
    svg{
      fill: #fff;;
    }
  }
  &.warning{
    background-color: @warning;
    border: 1px solid @warning;
    color: #fff;
    svg{
      fill: #fff;;
    }
  }
  &.danger{
    background-color: @danger;
    border: 1px solid @danger;
    color: #fff;
    svg{
      fill: #fff;;
    }
  }

  &.plain{
    opacity: .6;
    &:hover{
      opacity: 1;
    }
  }

  &.round{
    border-radius: calc(@buttonHeight/2);
  }

  &.disabled{
    cursor: not-allowed;
  }
  &.text{
    border: none;
    background-color: none;
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
