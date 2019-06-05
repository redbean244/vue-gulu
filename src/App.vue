<template>
  <!-- <div id="app">
    <g-tabs>
      <div>hi</div>
    </g-tabs>
    <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
      <g-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <g-tabs-item name="woman"  disabled>
          <g-icon name="setting"></g-icon>美女
        </g-tabs-item>
        <g-tabs-item name="finance">
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
  </div> -->
  <div id="app" style="padding-top: 100px; padding-left: 100px;">
    <g-popover>
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </g-popover>
    <g-popover>
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </g-popover>
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
import gPopover from './components/popover'


export default {
  name: 'App',
  components:{
    gTabs,gTabsHead,gTabsBody,gTabsItem,gTabsPane,gIcon,gPopover
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
  },
  created() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//at.alicdn.com/t/font_1127796_oygjm0oay8o.js';
    document.body.appendChild(s);
  }
}
</script>


<style lang="less">


</style>
