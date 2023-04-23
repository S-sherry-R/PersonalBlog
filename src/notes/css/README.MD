---
title: 笔记
date: 2022-08-12
category:
  - 前端
tag:
  - CSS
---
## 超出的文字用省略号
```frontend
/*单行超出*/
.item-name {
      overflow: hidden;/*超出部分隐藏*/
	  text-overflow:ellipsis;/*超出部分省略号*/
	  white-space: nowrap;/*只显示一行*/
    }
/*多行超出*/
.item-name {
      letter-spacing: 0;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;  /*要显示的行数*/
      -webkit-box-orient: vertical;
    }
```
## z-index不生效
未使用定位不会生效
## 样式覆盖
```frontend
/deep/.ant-border{
  
}
```
## 表格宽度不生效
当表格的内容都是英文的时候，没有其他特殊字符，浏览器将增加表格和列的宽度，从而在一行中显示出所有的内容。浏览器不会根据设置的表格宽度和列宽度自动对这些内容换行
解决：在表格定义中加
```plugins
<table style="word-break:break-all">
```
 
