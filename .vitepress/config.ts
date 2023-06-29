import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yao's blog",
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blogs/blogs' }
    ],

    sidebar: [
      {
        text: 'Coding / Learning Record',
        items: [
          { text: 'WPS、Office插件开发', link: '/blogs/coding-learning-record/office-dev' },
          { text: 'jssip-renegotiaton、FreeSwitch探索', link: '/blogs/coding-learning-record/jssip-FreeSwitch-dev' },
          { text: 'three.js折腾', link: '/blogs/coding-learning-record/three.js-learning' },
          { text: 'shared-worker', link: "/blogs/coding-learning-record/shared-worker" },
          { text: 'flutter-demo', link: "/blogs/coding-learning-record/flutter-demo" },
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
        text: 'Anything',
        items: [
          {text:"联系我",link:'/blogs/anything/link-me'}
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: '/blogshttps://github.com/vuejs/vitepress' }
    ]
  }
})
