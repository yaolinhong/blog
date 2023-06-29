import{_ as e,o as a,c as s,O as t}from"./chunks/framework.7f9d94da.js";const g=JSON.parse('{"title":"jssip-renegotiaton、FreeSwitch探索","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/coding-learning-record/jssip-FreeSwitch-dev.md","filePath":"blogs/coding-learning-record/jssip-FreeSwitch-dev.md"}'),r={name:"blogs/coding-learning-record/jssip-FreeSwitch-dev.md"},i=t(`<h1 id="jssip-renegotiaton、freeswitch探索" tabindex="-1">jssip-renegotiaton、FreeSwitch探索 <a class="header-anchor" href="#jssip-renegotiaton、freeswitch探索" aria-label="Permalink to &quot;jssip-renegotiaton、FreeSwitch探索&quot;">​</a></h1><h2 id="折腾的起因" tabindex="-1">折腾的起因 <a class="header-anchor" href="#折腾的起因" aria-label="Permalink to &quot;折腾的起因&quot;">​</a></h2><p>需要帮朋友解决renegotiaton的问题 玩了一下jssip的api</p><h2 id="jssip" tabindex="-1">jssip <a class="header-anchor" href="#jssip" aria-label="Permalink to &quot;jssip&quot;">​</a></h2><p>两个关键api</p><ol><li>监听renegotiate、reinvite事件</li><li>replaceTrack替换轨道 （应该是需要重新offer）</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> 替换轨道 </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> 若是webrtc重新createOffer、但好像jssip在replaceTrack这个方法中把事情做掉了，怀疑是否需要addTrack </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 替换轨道需要用发起重启createOffer</span></span></code></pre></div><h2 id="折腾freeswitch" tabindex="-1">折腾FreeSwitch <a class="header-anchor" href="#折腾freeswitch" aria-label="Permalink to &quot;折腾FreeSwitch&quot;">​</a></h2><h3 id="_1-安装" tabindex="-1">1. 安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1. 安装&quot;">​</a></h3><p>windows下 下载msi 一路点安装即可 用管理员方式运行</p><h3 id="_2-wss配置" tabindex="-1">2.wss配置 <a class="header-anchor" href="#_2-wss配置" aria-label="Permalink to &quot;2.wss配置&quot;">​</a></h3><p><a href="https://blog.csdn.net/foruok/article/details/74287842" target="_blank" rel="noreferrer">参考博客</a> 配置之后 启动freeswitch （管理员方式启动）7443的端口仍然没有服务；</p><h2 id="遗留的问题" tabindex="-1">遗留的问题 <a class="header-anchor" href="#遗留的问题" aria-label="Permalink to &quot;遗留的问题&quot;">​</a></h2><ol><li>jssip连接ws 连接不上</li><li>renegotiation是否需要重新createOffer</li></ol><h2 id="_06已解决" tabindex="-1">06已解决 <a class="header-anchor" href="#_06已解决" aria-label="Permalink to &quot;06已解决&quot;">​</a></h2>`,15),o=[i];function n(l,c,p,h,d,_){return a(),s("div",null,o)}const u=e(r,[["render",n]]);export{g as __pageData,u as default};
