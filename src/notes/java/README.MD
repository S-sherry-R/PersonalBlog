---
title: 笔记
date: 2022-08-12
category:
  - 后端
tag:
  - JAVA
---
## PageHelper带来的查询错乱
pageHelper执行之后必须要有一个mapper把他消费掉，不然会影响其他查询的执行。

## split，有多种分隔符

split表达式，其实就是一个正则表达式。\* ^ : | . \等符号在正则表达式中属于一种有特殊含义的字符，如果使用此种字符作为分隔符，必须使用转义符即\\\加以转义。

如果使用多个分隔符则需要借助 | 符号，但需要转义符的仍然要加上分隔符进行处理

````java
String address="上海^上海市@闵行区#吴中路";
String[] splitAddress=address.split("\\^|@|#");
````

### 以字符串获取bean

报错NoSuchBeanDefinitionException: No bean named 'xxx'  is defined

````java
 ContextLoader.getCurrentWebApplicationContext().getBean(String name)
````

1、spring默认的组扫描的bean id 是类名的首字母小写。如果类名第一个字母大写第二个小写，那么在使用getBean参数时类名首字小写作为bean_id 来获取javaBean

`applicationContext.getBean("testContextLoader")`

2、如果第一个和第二个字母都是大写的，那个获取bean首字母要大写   如：TEstContextLoader

`applicationContext.getBean("TEstContextLoader")`
