<template>
    <g-button type="primary" :loading="true">加载中</g-button>
</template>

<script>
   import gButton from '../../../../src/components/button.vue'
   export default {
        name: 'demo5',
        components:{
            gButton
        }
   }
</script>
<style  scoped>
</style>