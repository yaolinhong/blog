import{_ as s,o as a,c as n,V as l}from"./chunks/framework.12adfae7.js";const y=JSON.parse('{"title":"使用linux命令","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/tools/linux.md","filePath":"blogs/tools/linux.md"}'),e={name:"blogs/tools/linux.md"},p=l(`<h1 id="使用linux命令" tabindex="-1">使用linux命令 <a class="header-anchor" href="#使用linux命令" aria-label="Permalink to &quot;使用linux命令&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;!-- node程序的进程 --&gt;</span></span>
<span class="line"><span style="color:#babed8;">ps -ef | grep node</span></span>
<span class="line"><span style="color:#babed8;">&lt;!-- 解压到当前文件夹 --&gt;</span></span>
<span class="line"><span style="color:#babed8;">tar -zxvf maotai_fe.tar.gz </span></span>
<span class="line"><span style="color:#babed8;">unzip maotai_fe.zip </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;!-- ubuntu安装deb包 --&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">sudo dpkg -i package.deb</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;!-- 杀掉8888端口应用 --&gt;</span></span>
<span class="line"><span style="color:#babed8;">lsof -i :8888</span></span>
<span class="line"><span style="color:#babed8;">pkill -9 {上面的pid}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;!-- 查看系统版本 --&gt;</span></span>
<span class="line"><span style="color:#babed8;">lsb_release -a024</span></span></code></pre></div><p>win异常端口占用 吧</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">net stop winnat</span></span>
<span class="line"><span style="color:#babed8;">netsh int ipv4 set dynamic tcp start=49152 num=16384</span></span>
<span class="line"><span style="color:#babed8;">netsh int ipv6 set dynamic tcp start=49152 num=16384</span></span>
<span class="line"><span style="color:#babed8;">net start winnat</span></span></code></pre></div>`,4),t=[p];function o(c,i,r,b,d,_){return a(),n("div",null,t)}const g=s(e,[["render",o]]);export{y as __pageData,g as default};
