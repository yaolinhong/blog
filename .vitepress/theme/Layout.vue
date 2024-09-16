<template>
  <ClientOnly>
    <Layout>
      <template #layout-bottom>
        <footer style="display: flex;justify-content: center;align-items:center;font-size: 12px;flex-direction: column;">
          <div style="display: flex;align-items: center;">
            MIT Licensed | Copyright © 2023-present
            <a href="https://github.com/yaolinhong">&nbsp;&nbsp;&nbsp;yaolinhong</a>
          </div>

          <a style="display: flex;justify-content: center;align-items: center;" href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2023072596号-1</a>

        </footer>
      </template>
    </Layout>
  </ClientOnly>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
</script>

<style scoped></style>
