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
