---
title: 多维数组过滤
date: 2022-08-12
category:
  - 前端 
tag:
  - JAVASCRIPT
---

```js
// 数据
var treeNodeList = [{
        "name": "一级A",
        "children": [{
            "name": "一级-1",
            "children": [{
                "name": "一级-1-1",
                "children": [{
                        "name": "一级-1-1-1",
                        "type": "true",
                    },
                    {
                        "name": "一级-1-1-3",
                        "type": "true",
                    }
                ]
            }]
        }]
    },
    {
        "name": "二级B",
        "children": [{
            "name": "二级-1",
            "children": [{
                "name": "二级-2-2",
                "children": [{
                        "name": "二级-2-2-2",
                        "type": "true",
                    },
                    {
                        "name": "二级-2-2-1",
                        "type": "true",
                    }
                ]
            }]
        }]
    },
    {
        "name": "三级C",
        "children": [{
            "name": "三级-1",
            "children": [{
                "name": "三级-3-1",
                "children": [{
                        "name": "三级-3-3-1",
                        "type": "true",
                    },
                    {
                        "name": "三级-3-3-2",
                        "type": "true",
                    }
                ]
            }]
        }]
    }
]
 
var query = 'A'; //要搜索的字符串
 
var filterObj = function(item){
    //搜索第一层name
    if(item.name.indexOf(query) > -1) return true;
    //搜索第二次name
    if(item.hasOwnProperty("children")){
        item.children = item.children.filter(function(child){
            if(child.hasOwnProperty("type")){
                //判断name中是否包含所搜索的内容，filter函数的返回值是布尔值
                //为true保留在数组中，为false则过滤掉
                return child.name.indexOf(query) > -1;
            }else if(child.hasOwnProperty("children")){
                //如果包含children则进行下一轮搜索
                return filterObj(child);
            }
        })
        //这里一定要写返回值，不然过滤的结果会一直为空
        if(item.children.length > 0){
            return true;
        }
    }else{
        //如果没有children则直接进行查询
        return child.name.indexOf(query) > -1;
    }
}
//调用方法
var filter = treeNodeList.filter(function(item){
    return filterObj(item);
});
//打印结果
console.log(JSON.stringify(filter));
```
