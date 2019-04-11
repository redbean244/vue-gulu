<template>
    <div>
        <g-input v-model="message"></g-input>
        <p>value:{{message}}</p>
    </div>    
</template>

<script>
   import gInput from '../../../../src/components/input.vue'
   export default {
        name: 'demo2',
        components:{
            gInput
        },
        data(){
        return {
          message:1
        }
  },
   }
</script>
<style  scoped>
</style>