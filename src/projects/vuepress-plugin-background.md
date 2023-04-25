---
date: 2023-04-25
category:
  - 项目
tag:
  - 插件
sidebar: false
---
# vuepress-plugin-background
基于vuepress的背景插件
## 示例
[孤独的暖阳](https://sherrysr.top)
## 开始
- `npm` 安装：

  ```shell
  npm install vuepress-plugin-background
  ```

- `yarn` 安装：

  ```shell
  yarn add vuepress-plugin-background
  ```
## 使用
在 vuepress 项目的配置文件（`docs/.vuepress/config.ts`）中导入插件方法 `backPlugin`，并在 `plugins` 选项中调用：
```ts
import { backPlugin } from 'vuepress-plugin-background';
export default defineUserConfig({
  plugins: [
      backPlugin()
  ]
});
```
## 配置
* 如果不想修改配置，使用默认配置则直接调用`backPlugin()`即可。
* 如果想自己配置，提供以下配置：

```ts
backPlugin({
    //立体正方形在页面中的位置
    position:{right: '50px',top:'100px'},
    //立体正方形六个面的颜色
    color: [
        'rgba(171, 221, 164,0.4)',
        'rgba(102, 194, 165,0.4)',
        'rgba(50, 136, 189,0.4)',
        'rgba(254, 224, 139,0.4)',
        'rgba(244, 109, 67,0.4)',
        'rgba(213, 62, 79,0.4)',
    ]
})
```
## 许可证
[MIT](https://github.com/S-sherry-R/vuepress-plugin-background/blob/master/LICENSE)
