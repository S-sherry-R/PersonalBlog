---
title: MOMENT
date: 2022-08-12
icon: time
category:
  - 插件
tag:
  - moment
sticky: 1
---
## 日期格式化

```javascript
moment().format('MMMM Do YYYY, h:mm:ss a'); // 二月 25日 2022, 11:11:43 上午
moment().format('dddd');                    // 星期五
moment().format("MMM Do YY");               // 2月 25日 22
moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
moment().format();                          // 2022-02-25T11:11:43+08:00
```

## 相对时间

```javascript
moment("20111031", "YYYYMMDD").fromNow(); // 10 年前
moment("20120620", "YYYYMMDD").fromNow(); // 10 年前
moment().startOf('day').fromNow();        // 11 小时前，一天的开始时间
moment().endOf('day').fromNow();          // 13 小时内，一天的结束时间
moment().startOf('hour').fromNow();       // 12 分钟前
```

## 日历时间

```javascript
moment().subtract(10, 'days').calendar(); // 2022/02/15
moment().subtract(6, 'days').calendar();  // 上星期六11:11
moment().subtract(3, 'days').calendar();  // 上星期二11:11
moment().subtract(1, 'days').calendar();  // 昨天11:11
moment().calendar();                      // 今天11:11
moment().add(1, 'days').calendar();       // 明天11:11
moment().add(3, 'days').calendar();       // 下星期一11:11
moment().add(10, 'days').calendar();      // 2022/03/07
```

## 多语言支持

```javascript
moment.locale();         // zh-cn
moment().format('LT');   // 11:11
moment().format('LTS');  // 11:11:43
moment().format('L');    // 2022/02/25
moment().format('l');    // 2022/2/25
moment().format('LL');   // 2022年2月25日
moment().format('ll');   // 2022年2月25日
moment().format('LLL');  // 2022年2月25日上午11点11分
moment().format('lll');  // 2022年2月25日 11:11
moment().format('LLLL'); // 2022年2月25日星期五上午11点11分
moment().format('llll'); // 2022年2月25日星期五 11:11
```

