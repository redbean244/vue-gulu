---
title: 输入框
---

<script>
   export default {
        mounted() {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = '//at.alicdn.com/t/font_1127796_oygjm0oay8o.js';
            document.body.appendChild(s);
        }
   }
</script>

# Input 输入框
通过鼠标或键盘输入字符

## 基础用法

#### 基础的输入框用法。
<br>

<input-demo1></input-demo1>

``` html
<div class="box">
    <g-input placeholder="请输入内容"></g-input>
    <g-input placeholder="请输入内容" disabled></g-input>
    <g-input placeholder="请输入内容" readonly></g-input>
</div>
<div class="box" style="margin: 20px 0">
    <g-input value="王" error="姓名不能少于两个字"></g-input>
</div> 
```


## 双向绑定
<br>
<input-demo2></input-demo2>



``` js

data(){
    return {
        message:1
    }
}
<div>
    <g-input v-model="message"></g-input>
    <p>value：{{message}}</p>
</div>  
```
## Attributes

|参数|说明|类型|可选值|默认值
 ----|---|----|------|----|
placeholder	|输入框占位文本|	string|	—	|—
disabled	|禁用|	boolean	|—	|false
readonly	|原生属性，是否只读|	boolean|	—	|false
error|错误信息|string|-|-