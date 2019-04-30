<template>
  <div id="app">
        <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
          <g-tabs-head>
            <template slot="actions">
              <button>设置</button>
            </template>
            <g-tabs-item name="woman">
              <g-icon name="settings"></g-icon>美女
            </g-tabs-item>
            <g-tabs-item name="finance" disabled>
              财经
            </g-tabs-item>
            <g-tabs-item name="sports">
              体育
            </g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="woman">
              美女相关资讯
            </g-tabs-pane>
            <g-tabs-pane name="finance">
              财经相关资讯
            </g-tabs-pane>
            <g-tabs-pane name="sports">
              体育相关资讯
            </g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
  </div>
</template>

<script>
import Vue from 'vue'

import gIcon from './components/icon'
import gTabs from './components/tabs'
import gTabsHead from './components/tabs-head'
import gTabsBody from './components/tabs-body'
import gTabsItem from './components/tabs-item'
import gTabsPane from './components/tabs-pane'

export default {
  name: 'App',
  components:{
    gTabs,gTabsHead,gTabsBody,gTabsItem,gTabsPane,gIcon
  },
  data(){
    return {
        selectedTab: 'sports'
    }
  },
  methods: {
    yyy(data){
      console.log('yyy')
      console.log(data)
    }
  }
}
</script>

<style lang="less">


</style>
