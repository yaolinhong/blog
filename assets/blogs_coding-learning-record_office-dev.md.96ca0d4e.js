import{_ as s,o as l,c as a,O as o}from"./chunks/framework.aed1c312.js";const d=JSON.parse('{"title":"WPS、Office插件开发","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/coding-learning-record/office-dev.md","filePath":"blogs/coding-learning-record/office-dev.md"}'),n={name:"blogs/coding-learning-record/office-dev.md"},t=o(`<h1 id="wps、office插件开发" tabindex="-1">WPS、Office插件开发 <a class="header-anchor" href="#wps、office插件开发" aria-label="Permalink to &quot;WPS、Office插件开发&quot;">​</a></h1><h2 id="技术选型" tabindex="-1">技术选型 <a class="header-anchor" href="#技术选型" aria-label="Permalink to &quot;技术选型&quot;">​</a></h2><ol><li><p>JS Api</p><ul><li>高度可移植性：可以跨平台使用，支持Windows、Mac、iOS、Android等多个操作系统和设备。</li><li>与Web技术无缝集成：开发门槛较低。可以使用HTML、CSS、JavaScript等Web技术进行开发，方便与Web应用的集成。</li><li>安全性高：JS API是基于沙箱模型进行开发，可以有效避免恶意代码对系统造成的影响。</li><li>高度扩展性：可以通过使用Office Add-ins等技术进行扩展，增加插件的功能和适用范围。</li><li>开发负担 <ul><li>无法抹平两套sdk差异</li><li>资源发布需要上架审核，应用分别受两家厂商限制</li><li>2套代码 无法兼容</li></ul></li></ul></li><li><p>com 加载项</p><ul><li>功能强大：使用COM加载项可以实现更复杂的功能和操作，JS版本的接口相对阉割。</li><li>高性能：COM加载项可以直接访问本地API，不需要通过网络访问，因此速度更快，性能更高。</li><li>支持更广泛：COM加载项支持更广泛,只需要有对应的.NET Framework , VSTO RunTime运行环境,有更好的word、wps客户端兼容性</li><li>可定制性更强：COM加载项可以使用本地编程语言进行开发，支持更多的编程语言特性和库函数，可定制性更强。<strong>发布受厂商限制少</strong></li></ul></li><li><p>采用的技术选型 --- com加载项 结合webview</p><ul><li>优势 <ul><li>便于内网部署、web项目集成，能同时兼容wps、office</li><li>web资源支持增量更新</li><li>支持clickOne部署 一次安装，后续远程自动更新</li></ul></li><li>难点 <ul><li>webview、混合开发带来的安全问题</li><li>打包工具使用</li></ul></li><li>缺点 <ul><li>mac系统无法兼容（基于.net框架）</li></ul></li></ul></li></ol><p>以下以word插件展开讲 <code>com加载项结合webview2</code> 的技术选型</p><h2 id="面板配置" tabindex="-1">面板配置 <a class="header-anchor" href="#面板配置" aria-label="Permalink to &quot;面板配置&quot;">​</a></h2><p>ribbon配置</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">customUI</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://schemas.microsoft.com/office/2009/07/customui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onLoad</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ribbon_Load</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ribbon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tab</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tab1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">应用名称</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">group</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ContentGroup</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aegis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">textButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">按钮1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">					 </span><span style="color:#C792EA;">screentip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onAction</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OnTextButton</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">					 </span><span style="color:#C792EA;">supertip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inserts text at the cursor location.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tableButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">按钮2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">					 </span><span style="color:#C792EA;">screentip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Table</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onAction</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OnTableButton</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">					 </span><span style="color:#C792EA;">supertip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inserts a table at the cursor location.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tab</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ribbon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">customUI</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="业务开发" tabindex="-1">业务开发 <a class="header-anchor" href="#业务开发" aria-label="Permalink to &quot;业务开发&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- TODO --&gt;</span></span></code></pre></div><h2 id="clickone部署" tabindex="-1">clickOne部署 <a class="header-anchor" href="#clickone部署" aria-label="Permalink to &quot;clickOne部署&quot;">​</a></h2><ol><li>clickOne部署自动更新</li></ol><ul><li><p>优点： 安装之后，更新服务器资源后 用户端每次重启word均会拉取最新版本word</p></li><li><p>坑：</p></li></ul><ol><li>代码证书</li><li>自建证书不支持自动更新</li></ol><h2 id="构建兼容wps、word的插件安装包" tabindex="-1">构建兼容WPS、word的插件安装包 <a class="header-anchor" href="#构建兼容wps、word的插件安装包" aria-label="Permalink to &quot;构建兼容WPS、word的插件安装包&quot;">​</a></h2><ol><li>Advance installer</li><li>InnoSetup</li></ol><ul><li>好处:</li></ul><ol><li>安装可配置注册表、依赖项</li><li>一套代码、打包后一次性安装 word、wps vsto插件</li></ol><h2 id="插件效果" tabindex="-1">插件效果 <a class="header-anchor" href="#插件效果" aria-label="Permalink to &quot;插件效果&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">word插件</th><th style="text-align:center;">wps插件</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="https://github.com/yaolinhong/blog/blob/main/static/word%E6%8F%92%E4%BB%B6%E6%95%88%E6%9E%9C.png?raw=true"></td><td style="text-align:center;"><img src="https://github.com/yaolinhong/blog/blob/main/static/wps%E6%8F%92%E4%BB%B6%E6%95%88%E6%9E%9C.png?raw=true"></td></tr></tbody></table><h2 id="过程中坑" tabindex="-1">过程中坑: <a class="header-anchor" href="#过程中坑" aria-label="Permalink to &quot;过程中坑:&quot;">​</a></h2><ol><li>office文档机翻、社区参考资料少</li></ol>`,21),p=[t];function e(c,r,D,i,F,y){return l(),a("div",null,p)}const C=s(n,[["render",e]]);export{d as __pageData,C as default};
