import{_ as a,o as s,c as n,X as o}from"./chunks/framework.92e7fb7b.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/anything/spring-cloud.md","filePath":"blogs/anything/spring-cloud.md"}'),e={name:"blogs/anything/spring-cloud.md"},t=o(`<h2 id="项目启动" tabindex="-1">项目启动 <a class="header-anchor" href="#项目启动" aria-label="Permalink to &quot;项目启动&quot;">​</a></h2><ul><li>启动依赖安装问题 <ul><li>从pom.xml中看java、maven版本</li><li>本机java版本也要与项目要求java版本一致</li><li>内网包无法拉到 需要配置maven私有仓库 todo 解决私有仓库配置</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;pre class=&quot;console-output&quot;&gt;Started by timer</span></span>
<span class="line"><span style="color:#A6ACCD;">Running as SYSTEM</span></span>
<span class="line"><span style="color:#A6ACCD;">Building in workspace /data/jenkins/workspace/test2-xizhao-java-ins</span></span>
<span class="line"><span style="color:#A6ACCD;">The recommended git tool is: NONE</span></span>
<span class="line"><span style="color:#A6ACCD;">using credential 10781466-5bc2-4ab2-90da-91285e13c47a</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git rev-parse --resolve-git-dir /data/jenkins/workspace/test2-xizhao-java-ins/.git # timeout=10</span></span>
<span class="line"><span style="color:#A6ACCD;">Fetching changes from the remote Git repository</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git config remote.origin.url &lt;a href=&quot;http://gitlab.raritag.cn/xizhao-backend/business/xizhao-platform-institution.git&quot;&gt;http://gitlab.raritag.cn/xizhao-backend/business/xizhao-platform-institution.git&lt;/a&gt; # timeout=10</span></span>
<span class="line"><span style="color:#A6ACCD;">Fetching upstream changes from &lt;a href=&quot;http://gitlab.raritag.cn/xizhao-backend/business/xizhao-platform-institution.git&quot;&gt;http://gitlab.raritag.cn/xizhao-backend/business/xizhao-platform-institution.git&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git --version # timeout=10</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git --version # &#39;git version 1.8.3.1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">using GIT_ASKPASS to set credentials gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git fetch --tags --progress &lt;a href=&quot;http://gitlab.raritag.cn/xizhao-backend/business/xizhao-platform-institution.git&quot;&gt;http://gitlab.raritag.cn/xizhao-backend/business/xizhao-platform-institution.git&lt;/a&gt; +refs/heads/*:refs/remotes/origin/* # timeout=10</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git rev-parse refs/remotes/origin/test^{commit} # timeout=10</span></span>
<span class="line"><span style="color:#A6ACCD;">Checking out Revision 3edab892f3efe98472bafba406e5b324398e509d (refs/remotes/origin/test)</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git config core.sparsecheckout # timeout=10</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git checkout -f 3edab892f3efe98472bafba406e5b324398e509d # timeout=10</span></span>
<span class="line"><span style="color:#A6ACCD;">Commit message: &quot;Merge branch &#39;prod&#39; into test&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> &amp;gt; git rev-list --no-walk 3edab892f3efe98472bafba406e5b324398e509d # timeout=10</span></span>
<span class="line"><span style="color:#A6ACCD;">[test2-xizhao-java-ins] $ /bin/sh -xe /tmp/jenkins8726267618464466461.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">+ set JAVA_HOME=/var/local/jdk-11.0.18</span></span>
<span class="line"><span style="color:#A6ACCD;">+ /var/local/apache-maven-3.8.4/bin/mvn clean install -Dmaven.test.skip=true -U</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Scanning for projects...</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (1): 609 B</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (2): 609 B | 609 B</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (609 B at 802 B/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-dependency-center/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (609 B at 798 B/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] </span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] Some problems were encountered while building the effective model for com.xizhao:xizhao-platform-institution:jar:1.0-SNAPSHOT</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] &#39;dependencies.dependency.(groupId:artifactId:type:classifier)&#39; must be unique: com.baomidou:mybatis-plus-boot-starter:jar -&amp;gt; duplicate declaration of version \${mybatis-plus} @ line 135, column 21</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] &#39;build.plugins.plugin.version&#39; for org.apache.maven.plugins:maven-resources-plugin is missing. @ line 199, column 21</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] &#39;build.plugins.plugin.version&#39; for org.apache.maven.plugins:maven-deploy-plugin is missing. @ line 192, column 21</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] </span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] It is highly recommended to fix these problems because they threaten the stability of your build.</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] </span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] For this reason, future Maven versions might no longer support building such malformed projects.</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] ---------------&amp;lt; com.xizhao:xizhao-platform-institution &amp;gt;---------------</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Building xizhao-platform-institution 1.0-SNAPSHOT</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --------------------------------[ jar ]---------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (1): 992 B</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (2): 992 B | 992 B</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (992 B at 3.2 kB/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-cloud-feign/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (992 B at 3.2 kB/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (1): 768 B</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (2): 768 B | 768 B</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (768 B at 2.6 kB/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-swarm/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (768 B at 2.5 kB/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (1): 992 B</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (2): 992 B | 992 B</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (992 B at 3.3 kB/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/xizhao/xizhao-base-common/1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (992 B at 3.3 kB/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/file-api-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/file-api-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/file-api-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/file-api-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/file-api-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/file-api-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/reos-api-sdk/0.0.1-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/reos-api-sdk/0.0.1-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-sdk/0.0.1-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-sdk/0.0.1-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-sdk/0.0.1-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-sdk/0.0.1-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/file-core-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/file-core-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/file-core-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/file-core-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/file-core-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/file-core-sdk/0.0.6-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/reos-api-sdk/0.0.2-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/reos-api-sdk/0.0.2-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-sdk/0.0.2-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-sdk/0.0.2-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-sdk/0.0.2-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-sdk/0.0.2-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/ib/ib-boot-cloudapigateway-autoconfigure/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/ib/ib-boot-cloudapigateway-autoconfigure/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-cloudapigateway-autoconfigure/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-cloudapigateway-autoconfigure/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-cloudapigateway-autoconfigure/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-cloudapigateway-autoconfigure/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/ib/ib-boot-autoconfigures/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/ib/ib-boot-autoconfigures/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-autoconfigures/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-autoconfigures/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-autoconfigures/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-autoconfigures/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/ib/ib-boot/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/ib/ib-boot/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/ib/ib-boot-framework-common/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/ib/ib-boot-framework-common/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-framework-common/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-framework-common/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-framework-common/1.1.0-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/ib/ib-boot-framework-common/1.1.0-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (1): 373 B</span></span>
<span class="line"><span style="color:#A6ACCD;">Progress (2): 373 B | 373 B</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (373 B at 1.2 kB/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloaded from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/reos-api-client/0.0.4-SNAPSHOT/maven-metadata.xml&lt;/a&gt; (373 B at 1.2 kB/s)</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-releases: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/user-api-sdk/0.0.4-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-release-x4vPLw/com/alibaba/reos/open/user-api-sdk/0.0.4-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from rdc-snapshots: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/user-api-sdk/0.0.4-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/user-api-sdk/0.0.4-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Downloading from archetype: &lt;a href=&quot;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/user-api-sdk/0.0.4-SNAPSHOT/maven-metadata.xml&quot;&gt;https://repo.rdc.aliyun.com/repository/43708-snapshot-4GWsWi/com/alibaba/reos/open/user-api-sdk/0.0.4-SNAPSHOT/maven-metadata.xml&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] The artifact org.hibernate:hibernate-validator:jar:6.1.0.Final has been relocated to org.hibernate.validator:hibernate-validator:jar:6.1.0.Final</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- maven-clean-plugin:2.5:clean (default-clean) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Deleting /data/jenkins/workspace/test2-xizhao-java-ins/target</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Using &#39;UTF-8&#39; encoding to copy filtered resources.</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Copying 30 resources</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Changes detected - recompiling the module!</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Compiling 241 source files to /data/jenkins/workspace/test2-xizhao-java-ins/target/classes</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] /data/jenkins/workspace/test2-xizhao-java-ins/src/main/java/com/xizhao/institution/executor/NamedThreadFactory.java: /data/jenkins/workspace/test2-xizhao-java-ins/src/main/java/com/xizhao/institution/executor/NamedThreadFactory.java uses or overrides a deprecated API that is marked for removal.</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] /data/jenkins/workspace/test2-xizhao-java-ins/src/main/java/com/xizhao/institution/executor/NamedThreadFactory.java: Recompile with -Xlint:removal for details.</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] /data/jenkins/workspace/test2-xizhao-java-ins/src/main/java/com/xizhao/institution/controller/InstitutionReportSkuController.java: Some input files use unchecked or unsafe operations.</span></span>
<span class="line"><span style="color:#A6ACCD;">[WARNING] /data/jenkins/workspace/test2-xizhao-java-ins/src/main/java/com/xizhao/institution/controller/InstitutionReportSkuController.java: Recompile with -Xlint:unchecked for details.</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Not copying test resources</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Not compiling test sources</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Tests are skipped.</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Building jar: /data/jenkins/workspace/test2-xizhao-java-ins/target/xizhao-platform-institution-1.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- spring-boot-maven-plugin:2.1.2.RELEASE:repackage (default) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Replacing main artifact with repackaged archive</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] </span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] --- maven-install-plugin:2.4:install (default-install) @ xizhao-platform-institution ---</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Installing /data/jenkins/workspace/test2-xizhao-java-ins/target/xizhao-platform-institution-1.0-SNAPSHOT.jar to /data/maven/repository/com/xizhao/xizhao-platform-institution/1.0-SNAPSHOT/xizhao-platform-institution-1.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Installing /data/jenkins/workspace/test2-xizhao-java-ins/pom.xml to /data/maven/repository/com/xizhao/xizhao-platform-institution/1.0-SNAPSHOT/xizhao-platform-institution-1.0-SNAPSHOT.pom</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] ------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] BUILD SUCCESS</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] ------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Total time:  10.349 s</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] Finished at: 2024-02-07T08:41:13+08:00</span></span>
<span class="line"><span style="color:#A6ACCD;">[INFO] ------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">+ cp -rf /data/jenkins/jar .</span></span>
<span class="line"><span style="color:#A6ACCD;">+ docker build -t harbor.raritag.cn/test2/xizhao-java-ins:latest .</span></span>
<span class="line"><span style="color:#A6ACCD;">#0 building with &quot;default&quot; instance using docker driver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#1 [internal] load .dockerignore</span></span>
<span class="line"><span style="color:#A6ACCD;">#1 transferring context: 2B done</span></span>
<span class="line"><span style="color:#A6ACCD;">#1 DONE 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#2 [internal] load build definition from Dockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;">#2 transferring dockerfile: 539B 0.0s done</span></span>
<span class="line"><span style="color:#A6ACCD;">#2 DONE 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#3 [internal] load metadata for docker.io/duxinglangzi/alpine-java11:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">#3 DONE 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#4 [1/7] FROM docker.io/duxinglangzi/alpine-java11:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">#4 DONE 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#5 [internal] load build context</span></span>
<span class="line"><span style="color:#A6ACCD;">#5 transferring context: 147.60MB 0.4s done</span></span>
<span class="line"><span style="color:#A6ACCD;">#5 DONE 0.4s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#6 [2/7] RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span></span>
<span class="line"><span style="color:#A6ACCD;">#6 CACHED</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#7 [3/7] RUN mkdir -p /xizhao-java-ins</span></span>
<span class="line"><span style="color:#A6ACCD;">#7 CACHED</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#8 [4/7] WORKDIR /xizhao-java-ins</span></span>
<span class="line"><span style="color:#A6ACCD;">#8 CACHED</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#9 [5/7] ADD ./target/xizhao-platform-institution-1.0-SNAPSHOT.jar ./</span></span>
<span class="line"><span style="color:#A6ACCD;">#9 DONE 0.2s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#10 [6/7] ADD ./jar/opentelemetry-javaagent.jar ./</span></span>
<span class="line"><span style="color:#A6ACCD;">#10 DONE 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#11 [7/7] ADD ./jar/arthas-boot.jar ./</span></span>
<span class="line"><span style="color:#A6ACCD;">#11 DONE 0.0s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#12 exporting to image</span></span>
<span class="line"><span style="color:#A6ACCD;">#12 exporting layers</span></span>
<span class="line"><span style="color:#A6ACCD;">#12 exporting layers 0.3s done</span></span>
<span class="line"><span style="color:#A6ACCD;">#12 writing image sha256:b3f3032d24c1fd8a9b754a466ff3752f95f88fef600c7b15a72558f40375df4b done</span></span>
<span class="line"><span style="color:#A6ACCD;">#12 naming to harbor.raritag.cn/test2/xizhao-java-ins:latest done</span></span>
<span class="line"><span style="color:#A6ACCD;">#12 DONE 0.3s</span></span>
<span class="line"><span style="color:#A6ACCD;">+ docker login harbor.raritag.cn -u admin -p kbk6GSpK8323KE639iLgQE</span></span>
<span class="line"><span style="color:#A6ACCD;">WARNING! Using --password via the CLI is insecure. Use --password-stdin.</span></span>
<span class="line"><span style="color:#A6ACCD;">WARNING! Your password will be stored unencrypted in /var/lib/jenkins/.docker/config.json.</span></span>
<span class="line"><span style="color:#A6ACCD;">Configure a credential helper to remove this warning. See</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a href=&quot;https://docs.docker.com/engine/reference/commandline/login/#credentials-store&quot;&gt;https://docs.docker.com/engine/reference/commandline/login/#credentials-store&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Login Succeeded</span></span>
<span class="line"><span style="color:#A6ACCD;">+ docker push harbor.raritag.cn/test2/xizhao-java-ins:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">The push refers to repository [harbor.raritag.cn/test2/xizhao-java-ins]</span></span>
<span class="line"><span style="color:#A6ACCD;">d13869d0912e: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">12f16e5ab9ae: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">2dedde4f174d: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">5f70bf18a086: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">37044c4bf4ce: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">2e9c3dcb4310: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">7dfcf721d46c: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">018a9e842966: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">bfbf3abdb35e: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">c4d1b17971e5: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">b311f6059b1e: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">6b0ac22b586f: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">4ce9227a27cf: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">d17fd464e7c5: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">bde76260b707: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">54016b302478: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">eb525327e85b: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">3d18e271d2a5: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">bb1b4953a69d: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">8c2deaf64810: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">34d5ebaa5410: Preparing</span></span>
<span class="line"><span style="color:#A6ACCD;">6b0ac22b586f: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">4ce9227a27cf: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">d17fd464e7c5: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">bde76260b707: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">54016b302478: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">eb525327e85b: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">3d18e271d2a5: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">bb1b4953a69d: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">8c2deaf64810: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">34d5ebaa5410: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">018a9e842966: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">2e9c3dcb4310: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">bfbf3abdb35e: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">7dfcf721d46c: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">c4d1b17971e5: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">b311f6059b1e: Waiting</span></span>
<span class="line"><span style="color:#A6ACCD;">37044c4bf4ce: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">2e9c3dcb4310: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">5f70bf18a086: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">d13869d0912e: Pushed</span></span>
<span class="line"><span style="color:#A6ACCD;">7dfcf721d46c: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">bfbf3abdb35e: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">018a9e842966: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">c4d1b17971e5: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">6b0ac22b586f: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">4ce9227a27cf: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">d17fd464e7c5: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">b311f6059b1e: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">bde76260b707: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">54016b302478: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">eb525327e85b: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">3d18e271d2a5: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">bb1b4953a69d: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">8c2deaf64810: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">34d5ebaa5410: Layer already exists</span></span>
<span class="line"><span style="color:#A6ACCD;">12f16e5ab9ae: Pushed</span></span>
<span class="line"><span style="color:#A6ACCD;">2dedde4f174d: Pushed</span></span>
<span class="line"><span style="color:#A6ACCD;">latest: digest: sha256:32c96c17caca556b45ec7706d4740133c7498acb1bc80f04fbac831e57749d8d size: 4716</span></span>
<span class="line"><span style="color:#A6ACCD;">+ docker rmi harbor.raritag.cn/test2/xizhao-java-ins:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">Untagged: harbor.raritag.cn/test2/xizhao-java-ins:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">Untagged: harbor.raritag.cn/test2/xizhao-java-ins@sha256:32c96c17caca556b45ec7706d4740133c7498acb1bc80f04fbac831e57749d8d</span></span>
<span class="line"><span style="color:#A6ACCD;">Deleted: sha256:b3f3032d24c1fd8a9b754a466ff3752f95f88fef600c7b15a72558f40375df4b</span></span>
<span class="line"><span style="color:#A6ACCD;">+ kubectl -n test2 rollout restart deployment xizhao-java-ins</span></span>
<span class="line"><span style="color:#A6ACCD;">deployment.apps/xizhao-java-ins restarted</span></span>
<span class="line"><span style="color:#A6ACCD;">Finished: SUCCESS</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/pre&gt;</span></span></code></pre></div>`,3),l=[t];function p(r,i,c,m,A,d){return s(),n("div",null,l)}const h=a(e,[["render",p]]);export{C as __pageData,h as default};
