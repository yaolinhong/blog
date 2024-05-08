import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    // ...
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
    // Obtain configuration from: https://giscus.app/
    giscusTalk({
      repo: `yaolinhong/blog`,
      repoId: 'R_kgDOJt9HnA',
      category: 'Announcements', // default: `General`
      categoryId: 'DIC_kwDOJt9HnM4CXjyg',
      mapping: 'url', // default: `pathname`
      inputPosition: 'bottom', // default: `top`
      lang: 'zh-CN', // default: `zh-CN`
      // ...
    }, {
      frontmatter, route
    });
  }
};