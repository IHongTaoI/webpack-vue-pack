# vue CreatPage

> 这是我的一款vue 页面构建器，可用同一套架构写多个vue的页面。方便了写一些小vue页面但又不想搭建那么多的脚手架子;

## 使用说明

``` bash
# 安装依赖
npm install

# 创建一个页面
npm run creatView [页面命] [页面路径(如 src)]

# 运行一个页面 
npm run dev -- --env.page=[页面名]

```

## 例子

``` bash
# 创建test 页面
npm run creatView test src
```

``` bash
# 运行test页面
npm run dev -- --env.page=test
```