<template>
    <div>
        <div id = "we">
            <g-button>默认按钮</g-button>
            <g-button type="primary">主要按钮</g-button>
            <g-button type="success">成功按钮</g-button>
            <g-button type="info">信息按钮</g-button>
            <g-button type="warning">警告按钮</g-button>
            <g-button type="danger">危险按钮</g-button>
        </div>

        <div style="margin: 20px 0">
            <g-button plain>朴素按钮</g-button>
            <g-button type="primary" plain>主要按钮</g-button>
            <g-button type="success" plain>成功按钮</g-button>
            <g-button type="info" plain>信息按钮</g-button>
            <g-button type="warning" plain>警告按钮</g-button>
            <g-button type="danger" plain>危险按钮</g-button>
        </div>

        <div>
            <g-button round>圆形按钮</g-button>
            <g-button type="primary" round>主要按钮</g-button>
            <g-button type="success" round>成功按钮</g-button>
            <g-button type="info" round>信息按钮</g-button>
            <g-button type="warning" round>警告按钮</g-button>
            <g-button type="danger" round>危险按钮</g-button>
        </div>
    </div>    
</template>

<script>
   import gButton from '../../../../src/components/button.vue'
   export default {
       name: 'demo1',
        components:{
            gButton
        }
   }
</script>
<style  scoped>
</style>