<template>
    <div>
        <div>
            <g-button disabled>默认按钮</g-button>
            <g-button type="primary" disabled>主要按钮</g-button>
            <g-button type="success" disabled>成功按钮</g-button>
            <g-button type="info" disabled>信息按钮</g-button>
            <g-button type="warning" disabled>警告按钮</g-button>
            <g-button type="danger" disabled>危险按钮</g-button>
        </div>

        <div style="margin-top: 20px">
            <g-button plain disabled>朴素按钮</g-button>
            <g-button type="primary" plain disabled>主要按钮</g-button>
            <g-button type="success" plain disabled>成功按钮</g-button>
            <g-button type="info" plain disabled>信息按钮</g-button>
            <g-button type="warning" plain disabled>警告按钮</g-button>
            <g-button type="danger" plain disabled>危险按钮</g-button>
        </div>
    </div>    
</template>

<script>
   import gButton from '../../../../src/components/button.vue'
   export default {
       name: 'demo2',
        components:{
            gButton
        }
   }
</script>
<style  scoped>
</style>