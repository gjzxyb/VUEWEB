import {fileURLToPath, URL} from 'node:url';
import eslint from 'vite-plugin-eslint';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';
import {resolve} from 'node:path';
import components from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import setupExtend from 'vite-plugin-vue-setup-extend';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  'plugins': [
    vue(),
    // setup语法糖设置名字
    setupExtend({ /* options */ }),
    vueJsx({ /* options */ }),
    Unocss({ /* options */ }),
    eslint({'cache': false}),
    createSvgIconsPlugin({
      'iconDirs': [resolve(process.cwd(), 'src/icons/svg')],
      'symbolId': 'icon-[dir]-[name]',
      'svgoOptions': false
    }),
    components({
      'dirs': ['src/components/'], 'dts': 'types/components.d.ts', 'resolvers': [ElementPlusResolver()], 'deep': true
    }),
    autoImport({
      // 'pinia', 'vue-router', 'vue-i18n', 'vue', '@vueuse/core'
      'imports': ['vue', '@vueuse/core'],
      'dirs': ['src/hooks'], // 配置自动导入的目录
      'dts': 'types/auto-import.d.ts',
      'eslintrc': {
        // 默认false, true启用。false生成一次就可以，避免每次工程启动都生成
        'enabled': true,
        'filepath': './.eslintrc-auto-import.json', // 生成json文件
        'globalsPropValue': true,
      },
      'resolvers': [ElementPlusResolver()],
    }),
  ],
  'resolve': {
    'alias': {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
