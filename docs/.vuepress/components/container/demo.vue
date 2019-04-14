<template>
  <div id="demo">
    <g-container>
      <g-header>Header</g-header>
      <g-content>Content</g-content>
      <g-footer>Footer</g-footer>
    </g-container>

    <g-container>
      <g-aside>Aside</g-aside>
      <g-content>Content</g-content>
    </g-container>

    <g-container>
      <g-header>Header</g-header>
      <g-container>
        <g-aside>Aside</g-aside>
        <g-content>Content</g-content>
      </g-container>
    </g-container>

    <g-container>
      <g-header>Header</g-header>
      <g-container>
        <g-aside>Aside</g-aside>
        <g-container>
          <g-content>Content</g-content>
          <g-footer>Footer</g-footer>
        </g-container>
      </g-container>
    </g-container>

    <g-container>
      <g-aside>Aside</g-aside>
      <g-container>
        <g-header>Header</g-header>
        <g-content>Content</g-content>
      </g-container>
    </g-container>

    <g-container>
      <g-aside>Aside</g-aside>
      <g-container>
        <g-header>Header</g-header>
        <g-content>Content</g-content>
        <g-footer>Footer</g-footer>
      </g-container>
    </g-container>
  </div>
</template>

<script>
import gContainer from '../../../../src/components/container.vue'
import gContent from '../../../../src/components/content.vue'
import gHeader from '../../../../src/components/header.vue'
import gAside from '../../../../src/components/aside.vue'
import gFooter from '../../../../src/components/footer.vue'
export default {
  name: 'demo',
  data(){
    return {
      message:1
    }
  },
  components:{
    gContainer,gContent,gHeader,gAside,gFooter
  }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
.g-header, .g-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.g-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 200px;
}

.g-content {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

#demo > .g-container {
  margin-bottom: 40px;
}


</style>
