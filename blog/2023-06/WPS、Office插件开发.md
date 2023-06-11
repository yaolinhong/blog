
#  WPS、Office插件开发
## 技术选型
1. JS Api
      * 高度可移植性：可以跨平台使用，支持Windows、Mac、iOS、Android等多个操作系统和设备。
      * 与Web技术无缝集成：开发门槛较低。可以使用HTML、CSS、JavaScript等Web技术进行开发，方便与Web应用的集成。
      * 安全性高：JS API是基于沙箱模型进行开发，可以有效避免恶意代码对系统造成的影响。
      * 高度扩展性：可以通过使用Office Add-ins等技术进行扩展，增加插件的功能和适用范围。
      * 开发负担
        * 无法抹平两套sdk差异
        * 资源发布需要上架审核，应用分别受两家厂商限制
        * 2套代码 无法兼容  

2. com 加载项
   * 功能强大：使用COM加载项可以实现更复杂的功能和操作，JS版本的接口相对阉割。
   * 高性能：COM加载项可以直接访问本地API，不需要通过网络访问，因此速度更快，性能更高。
   * 支持更广泛：COM加载项支持更广泛,只需要有对应的.NET Framework , VSTO RunTime运行环境,有更好的word、wps客户端兼容性
   * 可定制性更强：COM加载项可以使用本地编程语言进行开发，支持更多的编程语言特性和库函数，可定制性更强。**发布受厂商限制少**
3. 采用的技术选型 --- com加载项 结合webview
     * 优势
       * 便于内网部署、web项目集成，能同时兼容wps、office
       * web资源支持增量更新
       * 支持clickOne部署 一次安装，后续远程自动更新
     * 难点
       * webview、混合开发带来的安全问题
       * 打包工具使用
     * 缺点
        * mac系统无法兼容（基于.net框架）

以下以word插件展开讲 ```com加载项结合webview2``` 的技术选型

## 面板配置
ribbon配置
```xml

<?xml version="1.0" encoding="UTF-8"?>
<customUI xmlns="http://schemas.microsoft.com/office/2009/07/customui" onLoad="Ribbon_Load">
  <ribbon>
    <tabs>
		<tab id="tab1" label="应用名称">
			<group id="ContentGroup" label="aegis">
				<button id="textButton" label="按钮1"
					 screentip="Text" onAction="OnTextButton"
					 supertip="Inserts text at the cursor location."/>
				<button id="tableButton" label="按钮2"
					 screentip="Table" onAction="OnTableButton"
					 supertip="Inserts a table at the cursor location."/>
			</group>
		</tab>
    </tabs>
  </ribbon>
</customUI>

```

## 业务开发

```
<!-- TODO -->
```


## clickOne部署
1. clickOne部署自动更新
* 优点：
安装之后，更新服务器资源后 
用户端每次重启word均会拉取最新版本word

* 坑：
1. 代码证书
2. 自建证书不支持自动更新

## 构建兼容WPS、word的插件安装包
1. Advance installer
2. InnoSetup

* 好处: 
1. 安装可配置注册表、依赖项
2. 一套代码、打包后一次性安装 word、wps vsto插件

 ## 插件效果
|word插件|wps插件|
|:----:|:----:|
|<img src="https://github.com/yaolinhong/blog/blob/main/static/word%E6%8F%92%E4%BB%B6%E6%95%88%E6%9E%9C.png?raw=true"></img>|<img src="https://github.com/yaolinhong/blog/blob/main/static/wps%E6%8F%92%E4%BB%B6%E6%95%88%E6%9E%9C.png?raw=true "></img>|



## 过程中坑: 
1. office文档机翻、社区参考资料少