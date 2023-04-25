---
title: docxtemplater模板语法，导出word
date: 2023-04-25
category:
  - 前端
tag:
  - vue
sticky: 4
---
## 安装插件
```shell
npm install --save docxtemplater pizzip jszip-utils jszip file-saver
```
如果不需要打包，则jszip-utils和jszip不用安装
如果想使用高级语法，可引入以下两个插件， 可解析更多表达式：
```shell
npm install --save angular-expressions lodash
```
## 导出单个word
wordUtil.js
```js
import JSZipUtils from 'jszip-utils';  
import PizZip from 'pizzip';  
import docxtemplater from 'docxtemplater';  
import { saveAs } from 'file-saver';  
import util from "@/js/util";  
let expressions = require("angular-expressions");  
let assign = require("lodash/assign");  
function angularParser(tag) {  
  tag = tag  
    .replace(/^\.$/, "this")  
    .replace(/(’|‘)/g, "'")  
    .replace(/(“|”)/g, '"');  
  const expr = expressions.compile(tag);  
  return {  
    get: function (scope, context) {  
      let obj = {};  
      const scopeList = context.scopeList;  
      const num = context.num;  
      for (let i = 0, len = num + 1; i < len; i++) {  
        obj = assign(obj, scopeList[i]);  
      }  
      return expr(scope, obj);  
    },  
  };  
}  
export default {  
  /**  
   * 导出word   * @param path 模板路径  
   * @param baseInfo 加入的数据  
   * @param name 导出的文件名称  
   */  
   exportWord(path,baseInfo,name) {  
    JSZipUtils.getBinaryContent(path, (error, content) => {  
      const zip = new PizZip(content);  
      let doc = new docxtemplater();  
      doc.loadZip(zip).setOptions({parser:angularParser})  
      doc.setData(baseInfo);  
      try {  
        doc.render();  
      } catch (error) {  
        const e = {  
          message: error.message,  
          name: error.name,  
          stack: error.stack,  
          properties: error.properties  
        };  
        console.log(e)  
        util.message("下载异常");  
        throw e  
      }  
      const out = doc.getZip().generate({  
        type: 'blob',  
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'  
      });  
      saveAs(out, name);  
    });  
  },  
}
```
调用：
```js
import wordUtil from "@/js/wordUtil";
const info={
	name:'小明',
	age:16,
	gend:0,
	dogs:[
		{name:'阿黄',hobby:'骨头'},
		{name:'阿黑',hobby:'棒球'},
		{name:'小岛',hobby:'睡觉'},
	]
}
wordUtil.exportWord('/tmpl/测试.docx',info,'测试.docx')
```
模板编写：
![p1](/assets/articles/essay4-1.png)
导出结果：
![p2](/assets/articles/essay4-2.png)
## 导出多个word，并打包成zip
downloadZip.ts
```js
import docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

// 引入angular-expression 解析器
let expressions = require("angular-expressions");
let assign = require("lodash/assign");
expressions.filters.lower = function (input: any) {
    if (!input) return input;
    return input.toLowerCase();
};
function angularParser(tag: any) {
    tag = tag
        .replace(/^\.$/, "this")
        .replace(/(’|‘)/g, "'")
        .replace(/(“|”)/g, '"');
    const expr = expressions.compile(tag);
    return {
        get: function (scope: any, context: any) {
            let obj = {};
            const scopeList = context.scopeList;
            const num = context.num;
            for (let i = 0, len = num + 1; i < len; i++) {
                obj = assign(obj, scopeList[i]);
            }
            return expr(scope, obj);
        },
    };
}

// 导出方法
export const exportDocx = (tempDocxPath: string, list: any[], zipName: string) => {
    const promises: any[] = [];
    const zips = new JSZip();
    //  循环数据，生成word文件
    list.forEach((element, index) => {
        let fileName = zipName + '（' + index + '）' + '.docx'; // word文件名称
        let data = element;
        const promise = new Promise((resolver: any, reject) => {
            JSZipUtils.getBinaryContent(tempDocxPath, (error: any, content: any) => {
                if (error) {
                    throw error;
                }
                let zip = new PizZip(content);
                let doc = new docxtemplater().loadZip(zip).setOptions({ parser: angularParser });
                doc.setData(data);
                try {
                    doc.render();
                } catch (error: any) {
                    throw error;
                }
                let out = doc.getZip().generate({
                    type: 'blob',
                    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                });
                // 添至zip集合中
                zips.file(fileName, out, { binary: true });
                resolver();
            })
        })
        promises.push(promise);
    })

    // 下载zip包
    Promise.all(promises).then(() => {
        zips.generateAsync({ type: 'blob' }).then((content: any) => {
            saveAs(content, zipName);
        })
    })
}
```
调用：
```js
import downloadZip from "@/js/downloadZip";
const info={
	name:'小明',
	age:16,
	gend:0,
	dogs:[
		{name:'阿黄',hobby:'骨头'},
		{name:'阿黑',hobby:'棒球'},
		{name:'小岛',hobby:'睡觉'},
	]
}
wordUtil.exportWord('/tmpl/测试.docx',info,'测试.docx')
```
## 基本语法
变量：
```js
let name='小明'
let user={name:'李华'，age:0}

{name}
{person.name}{person.age}或者{#person}{name}{age}{/person}
```
数组：
```shell
let list = [{name: '张三', age: 12}, {name: '李四', age: 23}];
let array = ['one', 'two', 'three']
{#list}
  {name} {age}
{/list}
{#array}
 {.}
{/array}
```
判断：
```shell
{#isTrue}
...
{/}
```
若需要一些更复杂的判断，则需要引入angular-expressions
官方网址：[docxtemplater](https://docxtemplater.com/docs/)
