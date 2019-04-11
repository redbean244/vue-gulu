<template>
    <div>
        <div class="box">
          <g-input placeholder="请输入内容"></g-input>
          <g-input placeholder="请输入内容" disabled></g-input>
          <g-input placeholder="请输入内容" readonly></g-input>
        </div>
        <div class="box" style="margin: 20px 0">
          <g-input value="王" error="姓名不能少于两个字"></g-input>
        </div> 
    </div>    
</template>

<script>
   import gInput from '../../../../src/components/input.vue'
   export default {
       name: 'demo1',
        components:{
            gInput
        }
   }
</script>
<style  scoped>
</style>