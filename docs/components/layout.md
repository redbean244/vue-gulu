---
title: 布局
---


# Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局
####  使用单一分栏创建基础的栅格布局。

<br>

<layout-demo1></layout-demo1>

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

``` html

<g-row class="demoRow">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>

<g-row class="demoRow">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>

<g-row class="demoRow">
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
</g-row>

<g-row class="demoRow">
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
</g-row>


```

## 分栏间隔
#### 分栏之间存在间隔。
<br>

<layout-demo2></layout-demo2>

Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

``` html
<g-row class="demoRow" gutter="10">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>

<g-row class="demoRow" gutter="10">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
```

## 分栏偏移
#### 支持偏移指定的栏数。
<br>

<layout-demo3></layout-demo3>

通过制定` col `组件的` offset` 属性可以指定分栏偏移的栏数。
``` html
<g-row class="demoRow" gutter="10">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8" offset="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="6" offset="6">
       <div class="demoCol">6</div>
    </g-col>
    <g-col span="6" offset="6">
       <div class="demoCol">6</div>
    </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="4">
       <div class="demoCol">4</div>
    </g-col>
    <g-col span="4" offset="4">
       <div class="demoCol">4</div>
    </g-col>
    <g-col span="4" offset="8">
      <div class="demoCol">4</div>
    </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2" offset="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2" offset="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2" offset="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
       <div class="demoCol">2</div>
    </g-col>
    <g-col span="2" offset="2">
       <div class="demoCol">2</div>
    </g-col>
</g-row>
```



## Attributes

|参数|说明|类型|可选值|默认值
 ----|---|----|------|----|
gutter|	栅格间隔|	number|	—	|0
span|	栅格占据的列数|	number	—	|24
offset|	栅格左侧的间隔格数	|number	—|	0