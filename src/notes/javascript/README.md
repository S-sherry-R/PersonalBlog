---
title: 笔记
date: 2022-08-12
category:
  - 前端
tag:
  - JAVASCRIPT
---
## 获取浏览器类型
```javascript
function getBrowser() {
    var u = navigator.userAgent;
 
    var bws = [{
        name: 'sgssapp',
        it: /sogousearch/i.test(u)
    }, {
        name: 'wechat',
        it: /MicroMessenger/i.test(u)
    }, {
        name: 'weibo',
        it: !!u.match(/Weibo/i)
    }, {
        name: 'uc',
        it: !!u.match(/UCBrowser/i) || u.indexOf(' UBrowser') > -1
    }, {
        name: 'sogou',
        it: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1
    }, {
        name: 'xiaomi',
        it: u.indexOf('MiuiBrowser') > -1
    }, {
        name: 'baidu',
        it: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1
    }, {
        name: '360',
        it: u.indexOf('360EE') > -1 || u.indexOf('360SE') > -1
    }, {
        name: '2345',
        it: u.indexOf('2345Explorer') > -1
    }, {
        name: 'edge',
        it: u.indexOf('Edge') > -1
    }, {
        name: 'ie11',
        it: u.indexOf('Trident') > -1 && u.indexOf('rv:11.0') > -1
    }, {
        name: 'ie',
        it: u.indexOf('compatible') > -1 && u.indexOf('MSIE') > -1
    }, {
        name: 'firefox',
        it: u.indexOf('Firefox') > -1
    }, {
        name: 'safari',
        it: u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1
    }, {
        name: 'qqbrowser',
        it: u.indexOf('MQQBrowser') > -1 && u.indexOf(' QQ') === -1
    }, {
        name: 'qq',
        it: u.indexOf('QQ') > -1
    }, {
        name: 'chrome',
        it: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1
    }, {
        name: 'opera',
        it: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1
    }];
 
    for (var i = 0; i < bws.length; i++) {
        if (bws[i].it) {
            return bws[i].name;
        }
    }
 
    return 'other';
}
```
## 字符串替换
在使用replace替换字符串的时候，直接使用的话，只会替换找到的第一个字符，需要使用全局标志g来替换找到的所有字符
```javascript
url.replace(/amp;/g,"")   //替换url中的所有amp;字符串
```
## 定时器（setInterval)
setInterval 表示每隔一段时间触发一次，第一次并不是立即触发
```javascript
function test(){
    console.log('test')
}
// 只执行一次
setInterval(this.test(),300)
// 循环执行，第一次并不是立即触发
setInterval(this.test,300)
// 立即执行一次，并循环执行，目前解决办法
this.test()
setInterval(this.test,300)
```
## reduce
返回数组中所有元素的总和，累加器
这个方法接收两个参数：
1. 要执行的函数，要执行的函数中也可传入参数，分别为

    - prev：上次调用函数的返回值

    - cur：当前元素

    - index：当前元素索引

    - arr：被遍历的数组

2. 函数迭代的初始值
   没有设置函数的初始迭代值
```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);
```
设置初始迭代值
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
},5)
console.log(arr, sum);
```
计算数组中每个元素出现的次数
```javascript
let arr = ['name','age','long','short','long','name','name'] 

let arrResult = arr.reduce((pre,cur) =>{
    console.log(pre,cur)
    if(cur in pre){
        pre[cur]++
    }else{
        pre[cur] = 1
    }
    return pre
},{})

console.log(arrResult)//结果：{name: 3, age: 1, long: 2, short: 1}
```
去除数组中重复的元素
```javascript
let arrResult = arr.reduce((pre,cur) =>{
    if(!pre.includes(cur)){
        pre.push(cur)
    }
    return pre;
},[])

console.log(arrResult)//结果：["name", "age", "long", "short"]
```
对对象的属性求和
```javascript
let person = [
    {
        name: 'xiaoming',
        age: 18
    },{
        name: 'xiaohong',
        age: 17
    },{
        name: 'xiaogang',
        age: 19
    }
]

let result = person.reduce((a,b) =>{
    a = a + b.age;
    return a;
},0)

console.log(result)//结果：54
```
## 本地存储（webstorage）
浏览器通过window.localstorage和window.sessionstorage属性实现本地存储机制
### localstorage
浏览器关闭也不会消失，需要手动清除
```javascript
localstorage.setItem('id','hello')
localstorage.getItem('id')
localstorage.removeItem('id')
```
### sessionstorage
会话一旦关闭就清空
```javascript
sessionstorage.setItem('id','hello')
sessionstorage.getItem('id')
sessionstorage.removeItem('id')
```
