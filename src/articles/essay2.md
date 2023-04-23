---
title: 视频播放，获取缩略图
date: 2022-08-12
category:
  - 前端
tag:
  - JAVASCRIPT
---

### 定时绘制

每 20 毫秒，代码就会绘制视频的当前帧：

```plugins
<!DOCTYPE plugins>
<plugins>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>要使用的视频:</p>
<video id="video1" controls width="270" autoplay>
    <source src="mov_bbb.mp4" type='video/mp4'>
    <source src="mov_bbb.ogg" type='video/ogg'>
    <source src="mov_bbb.webm" type='video/webm'>
</video>

<p>画布 (代码在每20毫秒绘制当前的视频帧):</p>
<canvas id="myCanvas" width="270" height="135" style="border:1px solid #d3d3d3;">
您的浏览器不支持 HTML5 canvas 标签。
</canvas>
<script>
let v=document.getElementById("video1");
let c=document.getElementById("myCanvas");
ctx=c.getContext('2d');
v.addEventListener('play', function() 
{
	let i=window.setInterval(function() {ctx.drawImage(v,5,5,260,125)},20);
},false);
v.addEventListener('pause',function() 
{
	window.clearInterval(i);
},false);
v.addEventListener('ended',function() 
{
	clearInterval(i);
},false);  
</script>

</body>
</plugins>
```

### 获取视频第一帧

```tools
<template>
<div>
  <!-- 注意：必须要使用preload,不然绘制出的图片为空白，预加载-->
  <video id="video1" controls width="270" preload>
    <source src="https://www.w3school.com.cn/i/movie.ogg" type='video/ogg'>
  </video>

  <canvas id="myCanvas" width="270" height="135" style="border:1px solid #d3d3d3;">
    您的浏览器不支持 HTML5 canvas 标签。
  </canvas>
  <div id="test"></div>
</div>
</template>

<script>
export default {
  name: 'demoOnePart',
  mounted () {
    let v = document.getElementById('video1')
    let c = document.getElementById('myCanvas')
    let ctx = c.getContext('2d')
    let i
    v.addEventListener('loadeddata', function () {
      ctx.drawImage(v, 5, 5, 260, 125)
    }, false)
       //let img = document.createElement('img')
       //转成base64格式
      //img.src = c.toDataURL('image/png')
  },
}
</script>
```

在画布上定位图像：

| JavaScript 语法：*context*.drawImage(*img,x,y*); |
| :----------------------------------------------- |

在画布上定位图像，并规定图像的宽度和高度：

| JavaScript 语法：*context*.drawImage(*img,x,y,width,height*); |
| :----------------------------------------------------------- |

剪切图像，并在画布上定位被剪切的部分：

| JavaScript 语法：*context*.drawImage(*img,sx,sy,swidth,sheight,x,y,width,height*); |
| :----------------------------------------------------------- |

### 参数值

| 参数      | 描述                                         |
| :-------- | :------------------------------------------- |
| *img*     | 规定要使用的图像、画布或视频。               |
| *sx*      | 可选。开始剪切的 x 坐标位置。                |
| *sy*      | 可选。开始剪切的 y 坐标位置。                |
| *swidth*  | 可选。被剪切图像的宽度。                     |
| *sheight* | 可选。被剪切图像的高度。                     |
| *x*       | 在画布上放置图像的 x 坐标位置。              |
| *y*       | 在画布上放置图像的 y 坐标位置。              |
| *width*   | 可选。要使用的图像的宽度（伸展或缩小图像）。 |
| *height*  | 可选。要使用的图像的高度（伸展或缩小图像）。 |

