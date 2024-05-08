import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";
//default options
var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
  allow: [],
  ignore: [],
};
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { plugins: [SearchPlugin(options)] },
  title: "yao's blog",
  base: '/blog/',//仓库名
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blogs/blogs' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Coding / Learning Record',
        items: [
          { text: 'Docker nginx Dockerfile https配置 ', link: '/blogs/coding-learning-record/https' },
          { text: 'WPS、Office插件开发', link: '/blogs/coding-learning-record/office-dev' },
          { text: 'jssip-renegotiaton、FreeSwitch探索', link: '/blogs/coding-learning-record/jssip-FreeSwitch-dev' },
          { text: 'web3d', link: '/blogs/coding-learning-record/web3d' },
          { text: 'shared-worker', link: "/blogs/coding-learning-record/shared-worker" },
          { text: 'Vue 3 使用的疑惑与总结', link: "/blogs/coding-learning-record/vue3" },
          { text: 'onlyoffice使用与总结', link: "/blogs/coding-learning-record/onlyoffice" },
          { text: 'k8s', link: "/blogs/coding-learning-record/k8s" },
          { text: '打包你的js sdk', link: '/blogs/coding-learning-record/package-sdk' },
          { text: '微信支付、登陆的坑', link: "/blogs/coding-learning-record/wechat" },
          { text: 'flutter-demo', link: "/blogs/coding-learning-record/flutter-demo" },
          { text: 'nextJs-start', link: "/blogs/coding-learning-record/next-js" },
          { text: 'reactNative-start', link: "/blogs/coding-learning-record/reactNative-start" },
          { text: 'mysql', link: '/blogs/coding-learning-record/mysql' },
          { text: 'java版本管理', link: "/blogs/coding-learning-record/sdk-manage" },
          { text: 'linux 设置sh定时任务', link: "/blogs/anything/crontab" },
        ],
        collapsed: false
      },
      {
        text: 'Tools',
        items: [
          { text: '博客系统推荐', link: '/blogs/tools/blog-dev' },

        ],
        collapsed: true

      },
      {
        text: 'AI',
        items: [
          { text: 'ollama - 两行代码 运行LLM', link: '/blogs/ai/ollama' },
          { text: "stable-diffusion-ui实操", link: '/blogs/ai/sdui' },
        ],
      },
      {
        text: 'Anything',
        items: [
          { text: '2023 总结', link: '/blogs/fe-sumary/2024-plan' },
          { text: "联系我", link: '/blogs/anything/link-me' },
          { text: "Jenkins gitee cicd 配置", link: '/blogs/anything/jenkins' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaolinhong' }
    ]
  }
})
