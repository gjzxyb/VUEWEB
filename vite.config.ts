import type {UserConfig, ConfigEnv} from 'vite';
import {fileURLToPath, URL} from 'node:url';
import eslint from 'vite-plugin-eslint';
import {defineConfig,loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';
import {resolve} from 'node:path';
import components from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import setupExtend from 'vite-plugin-vue-setup-extend';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';


export default defineConfig(({command, mode}: ConfigEnv): UserConfig => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');
  console.log(command);
  console.log(mode);


  return {
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
        'imports': ['vue', '@vueuse/core','vitest'],
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
    'server': {
      'base': '/',
      'host': '0.0.0.0' ,
      'port': 3000,
      'proxy': {
        'api': {
          'target': env.VITE_APP_BASEURL,
          'changeOrigin': true,
          'rewrite': (path)=>path.replace(/^\/api/,''),

        }
      }
    }

  };
});
