<template>
    <svg class="g-icon" v-if="name">
       <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
   export default {
       name: 'g-icon',
       props:['name']
   }
</script>
<style  scoped>
  .g-icon{
    height: 1em;
    width: 1em;
  }
</style>