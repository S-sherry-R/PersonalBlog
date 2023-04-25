---
title: VUE
date: 2022-08-12
category:
  - 前端
tag:
  - VUE
---
## input、select的placeholder不生效
使用了v-model，当v-model没有值时placeholder就会失效，所以在v-model没有值时给它设置为undefined
## 生产提示
阻止vue在启动时生成生产提示
```javascript
Vue.config.productioTip=false
```
## Vue手动挂载
方法一：
当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载
```html
<div id="app">  
    {{name}}  
</div>  
<button onclick="test()">挂载</button>  
<script>  
    var obj= {name: '张三'}  
    var vm = new Vue({  
        data: obj
    })  
    function test() {  
        vm.$mount("#app");  
    }
</script>
```
方法二：
Vue.extend()用以创建没有挂载的的子类,可以使用该子累创建多个实例
```javascript
var app= Vue.extend({  
    template: '<p>{{firstName}} {{lastName}}</p>',  
         data: function () {  
             return {  
                firstName: 'Walter',  
                lastName: 'White' 
               }  
             }  
           })  
  // 创建 app实例，并挂载到一个元素上。  
  new app().$mount('#app')  
```
## vue3注册全局方法
```ts
import util from "@/js/util";  
  
const app = createApp(App)  
  
app.config.globalProperties.$util = util  
app.mount('#app')
```
组件中使用
```ts
import {onMounted,getCurrentInstance} from "vue";  
const {proxy} = getCurrentInstance()  
  proxy.$util.getFile("button/btnInstance1.txt",(res)=>{  
    console.log(res)  
  })
```
还不如直接引入来的方便
```ts
import util from "@/js/util";   
  util.getFile("button/btnInstance1.txt",(res)=>{  
    console.log(res)  
  })  
```
## dependencies和devDependencies的区别
**dependencies**和**devDependencies**的区别在于前者用于生产环境，后者用于开发环境

npm install xxx -g 表示全局安装，通常用于安装脚手架等工具

npm install xxx –save(-S) 表示本地安装，会被加至dependencies部分

npm install xxx –save-dev(-D) 表示本地安装，会被加至devDependencies部分

npm install会默认下载dependencies和devDependencies中的所有依赖包

> 1.如webpack、html-webpack-plugin等工具包就安装在devDependencies开发环境下，
>
> 2.  项目部署到开发环境所必须的依赖包则安装在dependencies生产环境下。

在项目编译时dependencies、devDependencies里的依赖其实没有影响，最重要的区别体现在:

> npm包发布的时候，其他的开发者可以从你发布的npm包中下载dependencies里的依赖包，而不能下载devDependencies里的内容。
