
# jssip-renegotiaton、FreeSwitch探索

<!-- 仓库名称 vue_fs_meeting -->

## 折腾的起因

需要帮朋友解决renegotiaton的问题 玩了一下jssip的api

## jssip

两个关键api

1. 监听renegotiate、reinvite事件
2. replaceTrack替换轨道 （应该是需要重新offer）

``` javascript
<!-- 替换轨道 -->
<!-- 若是webrtc重新createOffer、但好像jssip在replaceTrack这个方法中把事情做掉了，怀疑是否需要addTrack -->

// 替换轨道需要用发起重启createOffer
```

## 折腾FreeSwitch

### 1. 安装

windows下 下载msi 一路点安装即可 用管理员方式运行

### 2.wss配置

[参考博客](https://blog.csdn.net/foruok/article/details/74287842)
配置之后 启动freeswitch （管理员方式启动）7443的端口仍然没有服务；

## 遗留的问题

1. jssip连接ws 连接不上
2. renegotiation是否需要重新createOffer

## 06已解决

