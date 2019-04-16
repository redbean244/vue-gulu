---
title: 弹出框
---


# Toast 弹出框


## 基础用法

#### 基础的弹出框用法。
<br>

<toast-demo1></toast-demo1>

``` html
<g-button @click="showToast1">上方弹出</g-button>
<g-button @click="showToast2">中间弹出</g-button>
<g-button @click="showToast3">下方弹出</g-button>

```
``` js
methods: {
    showToast1(){
        this.showToast('top')
    },
    showToast2(){
        this.showToast('middle')
    },
    showToast3(){
        this.showToast('bottom')
    },
    showToast(position){
        this.$toast('点击弹出提示', {
            position,
            autoClose: 2,
        })
    }
}
```
## 设置关闭按钮
<br>
<toast-demo2></toast-demo2>

``` js
<g-button @click="showToast">中间弹出</g-button>

showToast(position){
    this.$toast('点击弹出提示', {
        position : "middle",
        closeButton: {
            text: '关闭',
            callback () {
                console.log('关闭了')
            }
        },
        autoClose: false,
    })
}
```
## Attributes

|参数|说明|类型|可选值|默认值
 ----|---|----|------|----|
position	|位置 |	string|	top,middle,bottom	|top
autoClose	|自动关闭|	boolean，number	|—	|2
