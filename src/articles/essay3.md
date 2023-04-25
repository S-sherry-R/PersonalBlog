---
title: vue3模板渲染模板template不支持编译
date: 2023-04-25
category:
  - 前端
tag:
  - vue
sticky: 3
---
报错：Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
翻译：组件提供了模板选项，但此版本的Vue不支持运行时编译。将bundler配置为别名“vue”为“vue/dist/vue.esm-bundler.js”。
```js
import {  createApp  } from "vue";
const component = createApp({  
 template:`<div>test</div>`  
})  
component.mount('#content')
```
![p1](/assets/articles/essay3-1.png)
![p2](/assets/articles/essay3-2.png)
改为：
```js
import {  createApp  } from "vue/dist/vue.esm-bundler";
const component = createApp({  
 template:`<div>test</div>`  
})  
component.mount('#content')
```
其实翻译中已经提出了解决办法
另外使用模板渲染不能使用`<script>`和`<style>`标签
可以如下使用：
`<component :is=style>`
`<component :is=script>`
