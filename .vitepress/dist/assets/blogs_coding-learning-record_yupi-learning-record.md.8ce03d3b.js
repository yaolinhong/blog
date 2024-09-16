import{_ as s,o as a,c as e,V as n}from"./chunks/framework.12adfae7.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/coding-learning-record/yupi-learning-record.md","filePath":"blogs/coding-learning-record/yupi-learning-record.md"}'),l={name:"blogs/coding-learning-record/yupi-learning-record.md"},o=n(`<h2 id="api开放平台" tabindex="-1">api开放平台 <a class="header-anchor" href="#api开放平台" aria-label="Permalink to &quot;api开放平台&quot;">​</a></h2><h3 id="gateway-模块-需要单独打开项目" tabindex="-1">gateway 模块 需要单独打开项目 <a class="header-anchor" href="#gateway-模块-需要单独打开项目" aria-label="Permalink to &quot;gateway 模块 需要单独打开项目&quot;">​</a></h3><h3 id="todo-整合到主项目启动" tabindex="-1">todo 整合到主项目启动 <a class="header-anchor" href="#todo-整合到主项目启动" aria-label="Permalink to &quot;todo 整合到主项目启动&quot;">​</a></h3><h3 id="mysql-执行sql插入报错-not-null的字段没有写入-补充该字段" tabindex="-1">mysql 执行sql插入报错 not null的字段没有写入 补充该字段 <a class="header-anchor" href="#mysql-执行sql插入报错-not-null的字段没有写入-补充该字段" aria-label="Permalink to &quot;mysql 执行sql插入报错 not null的字段没有写入 补充该字段&quot;">​</a></h3><h3 id="注册接口的逻辑" tabindex="-1">注册接口的逻辑 <a class="header-anchor" href="#注册接口的逻辑" aria-label="Permalink to &quot;注册接口的逻辑&quot;">​</a></h3><p>synchronized 关键字</p><ul><li>加锁和释放锁 无论方法正常执行完毕还是抛出异常，都会释放锁</li><li>一把锁只能同时被一个线程获取，没有获得锁的线程只能等待；每个实例都对应有自己的一把锁(this),不同实例之间互不影响；例外：锁对象是*.class以及synchronized修饰的是static方法的时候，所有对象公用同一把锁</li><li>synchronized修饰的方法，无论方法正常执行完毕还是抛出异常，都会释放锁</li></ul><h4 id="yuapiclient-调用接口上线报错" tabindex="-1">YuApiClient 调用接口上线报错 <a class="header-anchor" href="#yuapiclient-调用接口上线报错" aria-label="Permalink to &quot;YuApiClient 调用接口上线报错&quot;">​</a></h4><p>原因 gateway挂了 远程调用失败</p><h4 id="invoke-报错" tabindex="-1">invoke 报错 <a class="header-anchor" href="#invoke-报错" aria-label="Permalink to &quot;invoke 报错&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">  &quot;code&quot;: 50000,</span></span>
<span class="line"><span style="color:#babed8;">  &quot;data&quot;: null,</span></span>
<span class="line"><span style="color:#babed8;">  &quot;message&quot;: &quot;ConnectException: Connection refused: connect&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">synchronized (userAccount.intern()) {</span></span>
<span class="line"><span style="color:#babed8;">            // 账户不能重复</span></span>
<span class="line"><span style="color:#babed8;">            QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();</span></span>
<span class="line"><span style="color:#babed8;">            queryWrapper.eq(&quot;userAccount&quot;, userAccount);</span></span>
<span class="line"><span style="color:#babed8;">            long count = userMapper.selectCount(queryWrapper);</span></span>
<span class="line"><span style="color:#babed8;">            if (count &gt; 0) {</span></span>
<span class="line"><span style="color:#babed8;">                throw new BusinessException(ErrorCode.PARAMS_ERROR, &quot;账号重复&quot;);</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">            // 2. 加密</span></span>
<span class="line"><span style="color:#babed8;">            String encryptPassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());</span></span>
<span class="line"><span style="color:#babed8;">            // 3. 分配 accessKey, secretKey</span></span>
<span class="line"><span style="color:#babed8;">            String accessKey = DigestUtil.md5Hex(SALT + userAccount + RandomUtil.randomNumbers(5));</span></span>
<span class="line"><span style="color:#babed8;">            String secretKey = DigestUtil.md5Hex(SALT + userAccount + RandomUtil.randomNumbers(8));</span></span>
<span class="line"><span style="color:#babed8;">            // 4. 插入数据</span></span>
<span class="line"><span style="color:#babed8;">            User user = new User();</span></span>
<span class="line"><span style="color:#babed8;">            user.setUserAccount(userAccount);</span></span>
<span class="line"><span style="color:#babed8;">            user.setUserPassword(encryptPassword);</span></span>
<span class="line"><span style="color:#babed8;">            user.setAccessKey(accessKey);</span></span>
<span class="line"><span style="color:#babed8;">            user.setSecretKey(secretKey);</span></span>
<span class="line"><span style="color:#babed8;">            boolean saveResult = this.save(user);</span></span>
<span class="line"><span style="color:#babed8;">            if (!saveResult) {</span></span>
<span class="line"><span style="color:#babed8;">                throw new BusinessException(ErrorCode.SYSTEM_ERROR, &quot;注册失败，数据库错误&quot;);</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">            return user.getId();</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span></code></pre></div>`,13),t=[o];function p(r,c,i,d,u,b){return a(),e("div",null,t)}const g=s(l,[["render",p]]);export{h as __pageData,g as default};
