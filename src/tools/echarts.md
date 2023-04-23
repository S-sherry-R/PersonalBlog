---
title: ECHARTS
date: 2022-08-12
icon: echartstat
category:
  - 插件
tag:
  - ECHARTS
---
## echarts切换导致图形缩成一团
使用v-if，不要使用v-show
v-show导致在加载图形时初始化的长度为100

## 通用配置项

#### <span style='color:var(--theme-color)'>柱状图 bar</span>

| series[].type | xAxis | yAxis | markPoint     | markLine | label    | barWidth |
| ------------- | ----- | ----- | ------------- | -------- | -------- | -------- |
| 图表类型      | x轴   | y轴   | 最大值\最小值 | 平均值   | 显示文本 | 柱宽度   |

#### <span style='color:var(--theme-color)'>折线图 line</span>

| series[].type | xAxis | yAxis | markPoint     | markLine | label    | barWidth |
| ------------- | ----- | ----- | ------------- | -------- | -------- | -------- |
| 图表类型      | x轴   | y轴   | 最大值\最小值 | 平均值   | 显示文本 | 柱宽度   |

| lineStyle | areaStyle | boundaryGap | scale       |
| --------- | --------- | ----------- | ----------- |
| 线条风格  | 风格x轴   | 紧挨边缘    | 脱离0值比例 |

#### <span style='color:var(--theme-color)'>散点图 scatter</span>

| series[].type | xAxis | yAxis | symbolSize |
| ------------- | ----- | ----- | ---------- |
| 图表类型      | x轴   | y轴   | 散点大小   |

| itemStyle | showEffectOn | rippleEffect | scale       |
| --------- | ------------ | ------------ | ----------- |
| 散点样式  | 显示时机     | 涟漪效果     | 脱离0值比例 |

#### <span style='color:var(--theme-color)'>饼图 pie</span>

| series[].type | label    | radius | roseType | selectedMode | selectedOffset |
| ------------- | -------- | ------ | -------- | ------------ | -------------- |
| 图表类型      | 显示文本 | 半径   | 饼图类型 | 是否多选     | 选中扇区偏移量 |

#### <span style='color:var(--theme-color)'>地图 map</span>

| series[].type | geo            | map          | roam               | zoom   |
| ------------- | -------------- | ------------ | ------------------ | ------ |
| 图表类型      | 地理坐标系组件 | 指明地图数据 | 开启鼠标拖动和缩放 | 平均值 |

| center       | label        | geoIndex          | visualMap    | coordinateSystem |
| ------------ | ------------ | ----------------- | ------------ | ---------------- |
| 图表的中心点 | 是否显示地区 | 指明关联的geo组件 | 视觉映射组件 | 使用坐标系统     |

#### <span style='color:var(--theme-color)'>雷达图 radar</span>

| series[].type | radar      | indicator      | label | areaStyle | shape      |
| ------------- | ---------- | -------------- | ----- | --------- | ---------- |
| 图表类型      | 雷达图组件 | 雷达图的指示器 | 文字  | 区域颜色  | 雷达图形状 |

#### <span style='color:var(--theme-color)'>仪表盘 gauge</span>

| series[].type | max    | min    | itemStyle |
| ------------- | ------ | ------ | --------- |
| 图表类型      | 最大值 | 最小值 | 指针样式  |

#### <span style='color:var(--theme-color)'>直角坐标配置</span>

* grid

| show     | borderWidth | borderColor | left | top  | right |
| -------- | ----------- | ----------- | ---- | ---- | ----- |
| 是否可见 | 边框宽度    | 边框颜色    | 左边 | 顶部 | 右边  |

| bottom | width | height |
| ------ | ----- | ------ |
| 底部   | 宽度  | 高度   |

* axis

| type   | data | position |
| ------ | ---- | -------- |
| 轴类型 | 数据 | 显示位置 |

* dataZoom

| type       | xAxisIndex | yAxisIndex | start  | end    |
| ---------- | ---------- | ---------- | ------ | ------ |
| 缩放块类型 | x轴索引    | y轴索引    | 初始值 | 结束值 |

#### <span style='color:var(--theme-color)'>通用配置</span>

* title

| textStyle | borderWidth | borderColor | borderRadius |
| --------- | ----------- | ----------- | ------------ |
| 文字样式  | 边框宽度    | 边框颜色    | 边框圆角     |

| left | top  | right | bottom |
| ---- | ---- | ----- | ------ |
| 左边 | 顶部 | 右边  | 底部   |

* tooltip

| trigger  | triggerOn | formatter  |
| -------- | --------- | ---------- |
| 触发类型 | 触发时机  | 内容自定义 |

* toolbox.feature

| saveAsImage | dataView | restore | dataZoom | magicType |
| ----------- | -------- | ------- | -------- | --------- |
| 保存图片    | 数据视图 | 重置    | 缩放     | 图表转换  |

* legend

| data                                             |
| ------------------------------------------------ |
| 图例数据, 需要和series数组中某组数据的name值一致 |

## 自适应

* 步骤1: 监听窗口大小变化事件

* 步骤2: 在事件处理函数中调用 ECharts 实例对象的 resize 即可

  ````html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <script src="js/echarts.min.js"></script>
  </head>
  <body>
  	<div style=" height:400px;border:1px solid red"></div>
  <script>
  	var mCharts = echarts.init(document.querySelector("div"))
  	var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大
  		强']
  	var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]
  	var option = {
  		xAxis: {
  			type: 'category',
  			data: xDataArr
  		},
  		yAxis: {
  			type: 'value'
  		},
  		series: [
  			{
  				type: 'bar',
  				data: yDataArr
  			}
  		]
  	};
  	mCharts.setOption(option)
  	// 监听window大小变化的事件
  	window.onresize = function () {
  	// 调用echarts示例对象的resize方法
  	mCharts.resize()
  	}
  	// window.onresize = mCharts.resize
  </script>
  </body>
  </html>
  ````
## 全局echarts对象

全局 echarts 对象是引入 echarts.js 文件之后就可以直接使用的

* echarts.init

  初始化ECharts实例对象 使用主题

* echarts.registerTheme

  注册主题 只有注册过的主题,才能在init方法中使用该主题

* echarts.registerMap

  ````javascript
  注册地图数据
  $.get('json/map/china.json', function (chinaJson) {
  	echarts.registerMap('china', chinaJson);
  });
  geo组件使用地图数据
  var option = {
  	geo: {
  		type: 'map',
  		map: 'china',
  	},
  }
  ````

* echarts.connect

    * 一个页面中可以有多个独立的图表

    * 每一个图表对应一个 ECharts 实例对象

    * connect 可以实现多图关联，传入联动目标为 EChart 实例，支持数组

  ````html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <script src="js/echarts.min.js"></script>
  <script src="js/jquery.min.js"></script>
  </head>
  <body>
  	<div style="width: 600px;height:400px;border:1px solid red"></div>
  	<div style="width: 600px;height:400px;border:1px solid green" id="div1">
  </div>
  <script>
  	var mCharts = echarts.init(document.querySelector("div"), 'itcast')
  	var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大
  		强']
  	var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]
  	var option = {
  		xAxis: {
  			type: 'category',
  			data: xDataArr
  		},
  		toolbox: {
  			feature: {
  				saveAsImage: {}
  			}
  		},
  		yAxis: {
  			type: 'value'
  		},
  		series: [
  			{
  				type: 'bar',
  				data: yDataArr
  			}
  		]
  	};
  	mCharts.setOption(option)
  	$.get('json/map/china.json', function (chinaJson) {
  		echarts.registerMap('china', chinaJson)
  		var mCharts2 = echarts.init(document.querySelector('#div1'));
  		var option2 = {
  			geo: {
  				type: 'map',
  				map: 'china'
  			}
  		}
  		mCharts2.setOption(option2)
  		echarts.connect([mCharts, mCharts2])
  	})
  </script>
  </body>
  </html>
  ````
这样, 由于我们打开了toolbox中的saveAsImage, 所以会出现下载图片的按钮。而通过 `echarts.connect([mCharts, mCharts2])`, 此时点击下载图片按钮, 保存下来的图片就是两个图表的图片了

## echartsInstance对象

eChartsInstance 对象是通过 echarts.init 方法调用之后得到的

* echartsInstance.setOption

  * 设置或修改图表实例的配置项以及数据
  * 多次调用setOption方法,合并新的配置和旧的配置
  * 增量动画

* echartsInstance.resize

  重新计算和绘制图表,一般和window对象的resize事件结合使用
  ````javascript
  window.onresize = function(){
      myChart.resize();
  }
  ````

* echartsInstance.on、echartsInstance.off

  绑定或者解绑事件处理函数

    * 鼠标事件

      常见事件: 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup' 等
    
      ````javascript
      事件参数 arg: 和事件相关的数据信息
      mCharts.on('click', function (arg) {
      // console.log(arg)
      console.log('饼图被点击了')
      })
      解绑事件:
      mCharts.off('click')
      ````

    * ECharts 事件

      常见事件:legendselectchanged、'datazoom'、'pieselectchanged'、'mapselectchanged'等
      ````javascript
      事件参数 arg: 和事件相关的数据信息
      mCharts.on('legendselectchanged', function (arg) {
      console.log(arg)
      console.log('图例选择发生了改变...')
      })
      ````

* echartsInstance.dispatchAction

  主动触发某些行为, 使用代码模拟用户的行为

  ````javascript
  // 触发高亮的行为
  mCharts.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: 1
  })
  // 触发显示提示框的行为
  mCharts.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: 3
  })
  ````
* echartsInstance.clear

  清空当前实例，会移除实例中所有的组件和图表

  清空之后可以再次 setOption

* echartsInstance.dispose

  销毁实例，销毁后实例无法再被使用
