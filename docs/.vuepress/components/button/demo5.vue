<template>
    <div>
        <g-button-group>
            <g-button type="primary" icon="left">上一页</g-button>
            <g-button type="primary" icon="right" iconPosition="right">下一页</g-button>
        </g-button-group>
        <!-- <g-button-group>
            <g-button type="primary" icon="el-icon-edit"></g-button>
            <g-button type="primary" icon="el-icon-share"></g-button>
            <g-button type="primary" icon="el-icon-delete"></g-button>
        </g-button-group> -->
    </div>    
</template>

<script>
   import gButton from '../../../../src/components/button.vue'
   import gIcon from '../../../../src/components/icon.vue'
   import gButtonGroup from '../../../../src/components/buttonGroup.vue'
   export default {
        name: 'demo5',
        components:{
            gButton,gIcon,gButtonGroup
        }
   }
</script>
<style  scoped>
</style>