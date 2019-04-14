---
title: 按钮
---


# Container 布局容器
#### 用于布局的容器组件，方便快速搭建页面的基本结构：

`<g-container>`：外层容器。当子元素中包含 `<g-header>` 或 `<g-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<g-header>`：顶栏容器。

`<g-aside>`：侧边栏容器。

`<g-content>`：主要区域容器。

`<g-footer>`：底栏容器。

::: tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<g-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<g-container>`。
:::

# 常见页面布局
<br>
<container-demo></container-demo>

``` html
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

```

``` css
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
```