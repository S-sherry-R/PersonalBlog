---
title: 笔记
date: 2022-08-12
category:
  - 前端
tag:
  - HTML
---
## 同时传递event和其他参数
```html
<button @click='handleClick(123,$event)'>按钮</button>
```

## 事件调试

使用DOM事件如`onmouseenter`实现的效果，要怎么模拟调试？

* `element.onmouseenter = function() {...}`：

控制台主动调这个函数就行 `element.onmouseenter();`

* `addEventListener`：

`getEventListeners(element).mouseenter[0].listener()`

`element.dispatchEvent(new MouseEvent('mouseenter'))`

dispatchEvent不论on或者是add绑定的事件都会触发

## 强制刷新

页面强制刷新：shift+点刷新按钮（相当于重新渲染项目）
