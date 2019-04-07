<template>
    <div>
        <g-button icon="setting"> 111</g-button>
        <g-Button icon-position="right" icon="setting"> 111</g-Button>
        <g-Button icon="download" :loading="isLoading" @click="isLoading = !isLoading"> 111</g-Button>

        <pre>
            <code>{{contents}}</code>
        </pre>
    </div>    
</template>

<script>
   import gButton from '../../../src/components/button.vue'
   import gIcon from '../../../src/components/icon.vue'
   export default {
       name: 'button-demo',
       data:function(){
            return {
                isLoading: true ,
                contents:`
<g-button icon="setting"> 111</g-button>
<g-Button icon-position="right" icon="setting"> 111</g-Button>
<g-Button icon="download" :loading="isLoading" @click="isLoading = !isLoading"> 111</g-Button>
                `
            }
        },
        components:{
            gButton,gIcon
        },
        mounted() {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = '//at.alicdn.com/t/font_1127796_nndyhd11k3.js';
            document.body.appendChild(s);
        }
   }
</script>
<style  scoped>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>