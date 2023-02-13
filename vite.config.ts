import type { UserConfig, ConfigEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import eslint from 'vite-plugin-eslint'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'node:path'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import setupExtend from 'vite-plugin-vue-setup-extend'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Inspect from 'vite-plugin-inspect'
import px2ViewPort from 'postcss-px-to-viewport'

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  //console.log(command)
  //console.log(mode)
  //console.log(loadEnv(mode, process.cwd(), '').VITE_APP_BASEURL)

  return {
    plugins: [
      vue(),
      // setup语法糖设置名字
      setupExtend({
        /* options */
      }),
      vueJsx({
        /* options */
      }),
      Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()]
      }),
      eslint({ cache: false }),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: false
      }),
      components({
        dirs: ['src/components/'],
        dts: 'types/components.d.ts',
        deep: true,
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          }),
          ElementPlusResolver()
        ]
      }),
      Icons({
        autoInstall: true
      }),
      Inspect(),
      autoImport({
        vueTemplate: true,
        // 'pinia', 'vue-router', 'vue-i18n', 'vue', '@vueuse/core'
        imports: [
          'vue',
          '@vueuse/core',
          'vitepress',
          'pinia',
          '@vueuse/head',
          '@vueuse/math',

          {
            // "@vueuse/core": [
            //   // named imports
            //   "useMouse", // import { useMouse } from '@vueuse/core',
            //   // alias
            //   ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
            // ],
            axios: [
              // default imports
              ['default', 'axios'] // import { default as axios } from 'axios',
            ]
            // "@vue/reactivity-transform": ["$", "$$"],
          }
        ],
        dirs: ['@/utils'], // 配置自动导入的目录
        dts: 'types/auto-import.d.ts',
        eslintrc: {
          // 默认false, true启用。false生成一次就可以，避免每次工程启动都生成
          enabled: true,
          filepath: './.eslintrc-auto-import.json', // 生成json文件
          globalsPropValue: true
        },
        resolvers: [
          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          }),
          ElementPlusResolver()
        ]
      })
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      postcss: {
        plugins: [
          px2ViewPort({
            unitToConvert: 'px', //要转化的单位
            viewportwidth: 750, //UI设计為的宽度
            // 通常配置上面那两行就够了
            unitPrecision: 6, //转换后的精度，即小数点位数
            propList: ['*'], //指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', //指定需要传换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['ignore-'], //指定不转换为视窗单位的英名，
            minPixelValue: 1, //默认值1，小于或等于1px则不进行转换
            mediaQuery: true, //是否在媒体查询的css代码中进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            landscape: false // 是否处理横屏情况
          })
        ]
      }
    },
    server: {
      //base: '/',
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_APP_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
