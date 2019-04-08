---
title: 按钮
---

<script>
   export default {
        mounted() {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = '//at.alicdn.com/t/font_1127796_nndyhd11k3.js';
            document.body.appendChild(s);
        }
   }
</script>

# Button 按钮
常用的操作按钮。

## 基础用法

#### 基础的按钮用法。
<br>

<button-demo1></button-demo1>

使用`type`、`plain`和`round`属性来定义 Button 的样式。

``` js{4}
<div>
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

```

## 禁用状态
#### 按钮不可用状态。
<br>

<button-demo2></button-demo2>

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

``` js{4}
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
```

## 文字按钮
#### 没有边框和背景色的按钮。
<br>

<button-demo3></button-demo3>
``` js{4}
<div>
    <g-button type="text">文字按钮</g-button>
    <g-button type="text" disabled>文字按钮</g-button>
</div>
```

## 图标按钮
#### 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
<br>

<button-demo4></button-demo4>

设置`icon`属性即可，也可以设置在文字右边的 icon 。

``` js{4}

<div>
    <g-button icon="setting"></g-button>
    <g-button type="primary" icon="download" iconPosition="right">下载</g-button>
    <g-button type="primary" icon="thumbs_up">赞</g-button>
    <g-button type="primary" icon="up"></g-button>
</div>

```

## 按钮组
#### 以按钮组的方式出现，常用于多项类似操作。
<br>

<button-demo5></button-demo5>
使用`<g-button-group>`标签来嵌套你的按钮。
``` js{4}
<div>
    <g-button-group>
        <g-button type="primary" icon="left">上一页</g-button>
        <g-button type="primary" icon="right" iconPosition="right">下一页</g-button>
    </g-button-group>
</div> 
```

## 加载中
#### 点击按钮后进行数据加载操作，在按钮上显示加载状态。
<br>


<button-demo6></button-demo6>

要设置为 `loading` 状态，只要设置`loading`属性为`true`即可。

``` js{4}
<g-button type="primary" :loading="true">加载中</g-button>
```

## Attributes

|参数|说明|类型|可选值|默认值
 ----|---|----|------|----|
type|	类型|	string	|primary / success / warning / danger / info / text|	
plain|	是否朴素按钮|	boolean|	—	|false
round	|是否圆形按钮	|boolean|	—	|false
loading	|是否加载中状态|	boolean	|—|	false
disabled|	是否禁用状态|	boolean	|—|	false
icon	|图标类名	|string|	—	|—