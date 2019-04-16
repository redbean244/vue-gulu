<template>
  <div class="toast" :class="toastClasses">
    <slot></slot>
    <div class="line" ref="line" v-if="closeButton.text"></div>
    <span class="close" v-if="closeButton.text" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
  
</template>
<script>
  export default {
    name: 'GuluToast',
    props:{
        autoClose:{
            type:Boolean,
            default: false
        },
        autoCloseDelay:{
            type:Number,
            default: 1000
        },
        closeButton: {
            type: Object,
            default () {
                return {
                    text: '', callback: undefined
                }
            }
        },
        position: {
            type: String,
            default: 'top',
            validator (value) {
            return ['top', 'bottom', 'middle'].indexOf(value) >= 0
            }
        }
    },
    mounted(){
        this.execAutoClose()
    },
    computed: {
      toastClasses () {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods:{        
        execAutoClose () {
            if (this.autoClose){
                setTimeout(()=>{
                    this.close();
                },this.autoCloseDelay)
            }
        },
        close(){
            this.$el.remove();
            this.$emit('close');
            this.$destroy()
        },
        onClickClose () {
            this.close()
            if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this)//this === toast实例
            }
        }
    }
  }
</script>
<style scoped lang="less">
  @font-size: 14px;
  @toast-height: 40px;
  @toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: @font-size; height: @toast-height; line-height: 1.8;
    position: fixed; display: flex;
    color: white; align-items: center; background: @toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
    left: 50%;
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    &.position-top{
      top: 0;
      transform: translateX(-50%);
    }
    &.position-bottom{
      bottom: 0;
      transform: translateX(-50%);
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>