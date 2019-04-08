<template>
    <div>
        <g-button type="text">文字按钮</g-button>
        <g-button type="text" disabled>文字按钮</g-button>
    </div>    
</template>

<script>
   import gButton from '../../../../src/components/button.vue'
   export default {
       name: 'demo4',
        components:{
            gButton
        }
   }
</script>
<style  scoped>
</style>