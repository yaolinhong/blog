import{_ as s,o as n,c as a,X as l}from"./chunks/framework.92e7fb7b.js";const u=JSON.parse('{"title":"使用linux命令","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/tools/linux.md","filePath":"blogs/tools/linux.md"}'),p={name:"blogs/tools/linux.md"},e=l(`<h1 id="使用linux命令" tabindex="-1">使用linux命令 <a class="header-anchor" href="#使用linux命令" aria-label="Permalink to &quot;使用linux命令&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- node程序的进程 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef | grep node</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 解压到当前文件夹 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -zxvf maotai_fe.tar.gz </span></span>
<span class="line"><span style="color:#A6ACCD;">unzip maotai_fe.zip </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- ubuntu安装deb包 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dpkg -i package.deb</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 杀掉8888端口应用 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">lsof -i :8888</span></span>
<span class="line"><span style="color:#A6ACCD;">kill {上面的pid}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 查看系统版本 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">lsb_release -a024</span></span></code></pre></div>`,2),o=[e];function t(c,i,r,C,A,_){return n(),a("div",null,o)}const y=s(p,[["render",t]]);export{u as __pageData,y as default};
