<template>
    <div>
        <g-button icon="setting"></g-button>
        <g-button type="primary" icon="download" iconPosition="right">下载</g-button>
        <g-button type="primary" icon="thumbs_up">赞</g-button>
        <g-button type="primary" icon="up"></g-button>
    </div>    
</template>

<script>
   import gButton from '../../../../src/components/button.vue'
   import gIcon from '../../../../src/components/icon.vue'
   export default {
        name: 'demo4',
        components:{
            gButton,gIcon
        },
   }
</script>
<style  scoped>
</style>