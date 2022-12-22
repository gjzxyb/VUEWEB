# NODEJS

https://gitee.com/aj_aj/vue3-template

# 中文网

http://nodejs.p2hp.com/

# nodejs 管理工具 NVM

https://github.com/coreybutler/nvm-windows

# pnpm

https://pnpm.io/zh/installation

- 支持 monorepo 单一仓库, 当前项目只能使用当前项目的包, 不可使用其依赖依赖的包

- ##### 使用 pnpm, 依赖包将被存放在一个统一的位置

- **硬链接 (安装包时启用)**: 多个文件夹平等的共享同一个存储单元 (就算删除其中一个,仍可通过其他文件夹访问)

- 软链接: 其他文件或目录的引用

- mklink /H new source

- 跨磁盘会报警告 ==cross-device link not permitted==, 包存储应与安装的位置处于同一驱动器和文件系统上，否则，包将被复制，而不是被链接。 这是由于硬链接的工作方式带来的一个限制，因为一个文件系统上的文件无法寻址另一个文件系统中的位置。

- **如果您在磁盘 `A` 上执行 `pnpm install`，则 pnpm 存储必须位于磁盘 `A`。 如果 pnpm 存储位于磁盘 `B`，则所有需要的包将被直接复制到项目位置而不是链接。 这个严重的抑制了 pnpm 的存储和性能优势。**

### 安装 pnpm

```cmd
npm install -g pnpm

config get registry

pnpm set registry https://registry.npm.taobao.org

# https://registry.npmjs.org/
pnpm config set store-dir E:/.pnpm-store# 修改默认仓库地址

pnpm store path  # 获取包仓库地址（pnpm的仓库不能跨磁盘）
pnpm store prune  # 从store中删除当前未被(硬连接)引用的包来释放store的空间

```

`比较`

https://pnpm.io/zh/feature-comparison

| npm 命令           | pnpm 等价命令             |
| ------------------ | ------------------------- |
| npm install        | pnpm install 安装全部依赖 |
| npm install 包名   | pnpm add (-D) 包名        |
| npm uninstall 包名 | pnpm remove 包名          |
| npm run 脚本       | pnpm 脚本                 |

### 集成 eslint

依赖

```js
# VITE创建VUE项目
pnpm create vite@latest vue3 --template vuets
pnpm create vite@latest vue3 --template vue



# 继承 校验import vue
pnpm  add -D eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue vite-plugin-eslint
# eslint 初始化
npx eslint --init
# vite-plugin-eslint可在控制台打印错误信息 注册插件
import eslint from 'vite-plugin-eslint';
eslint({ cache: false })
```

### 集成 stylelint

- 关闭 vue 的校验, 暂时有 bug

**依赖引入**

`需要在IDE[集成开发环境]里面配置stylelint 开启vue scss css 的规范检查`

```js
pnpm create vite@latest  proj --template vue ;  cd proj ; pnpm install
# 给css加前缀等适应操作 安装postcss
pnpm add -D autoprefixer  postcss
# 校验css
pnpm add -D stylelint stylelint-config-standard  stylelint-config-recommended  vite-plugin-stylelint
# 使用scss和 scss lint    需要在IDE stylelint加上支持scss文件
pnpm add -D sass stylelint-config-standard-scss

import stylelint from 'vite-plugin-stylelint';
stylelint()

```

**postcss**

当前目录新建 postcss.config.js

```js
pnpm add -D autoprefixer  postcss

export default {
  plugins: {
    autoprefixer: {}
  },
};

// 测试并打印 会自动加上前缀
::placeholder {
  color: gray;
}
```

### 自动化

依赖

```js
pnpm create vite@latest vue3-template --template vue ;  cd vue3-template ; pnpm install

pnpm add -D unplugin-auto-import  unplugin-vue-components  vite-plugin-vue-setup-extend



# https://www.npmjs.com/package/unplugin-auto-import

import Components from 'unplugin-vue-components/vite'
Components({ /* options */ }),

import AutoImport from 'unplugin-auto-import/vite';
AutoImport({ imports: ['vue'], dts:"config/auto-import.d.ts"})
```

### Css UI 框架

```js
pnpm add -D  @tailwindcss/line-clamp  postcss-nesting  tailwindcss postcss-import

```

### Svg 配置

```JS
pnpm add  -D  vite-plugin-svg-icons

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: false
})

import 'virtual:svg-icons-register';
import svgIcon from '@/icons/svg-icon.vue';
app.component('svg-icon', svgIcon);
```

### element plus

```js
pnpm add element-plus
```

### 打包运行

- ```cmd
  npm install -g serve
  serve -s dist --debug
  ```

- 或者 vite preview

### 其他依赖

```js
# 给setup语法加 name
pnpm add  -D  vite-plugin-vue-setup-extend
# 清除console
pnpm add  -D vite-plugin-remove-console
# 打包显示进度条 https://blog.csdn.net/gongjin2012/article/details/125333102
pnpm add -D vite-plugin-progress
# 打包报告
pnpm add  -D rollup-plugin-visualizer
# gzip压缩
pnpm add  -D  vite-plugin-compression
#兼容IE
pnpm add  -D @vitejs/plugin-legacy
// import legacy from '@vitejs/plugin-legacy';
// legacy({
//   targets: ['ie >= 11'],
//   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
// })
# hooks api
pnpm add  @vueuse/core

# VueI18n
pnpm add vue-i18n  #必须安装 前置依赖
pnpm add  -D  @intlify/vite-plugin-vue-i18n
// 默认仅支持 组合式api
VueI18n({  include: [resolve(__dirname, '../locales/**')],})
// use
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
// 使用  locale可改变其值与文件名相等
const { locale, t } = useI18n();

# mock  数据
pnpm add  -D  vite-plugin-mock
#swiper  https://www.swiper.com.cn
pnpm add swiper  # :watchOverflow="false"单页面生效
# 全屏混动
pnpm add  vue-fullpage.js
# 美化基本html
pnpm add  animate.css   hover.css   normalize.css
# ui
pinia

cnpm install  --save  axios@0.18.1  #请求发送
cnpm install  --save  vue-router@3.0.6 #路由

cnpm install --save-dev plop@2.3.0  #代码生成
cnpm install  --save nprogress@0.2.0 #进度条
cnpm install  --save  path-to-regexp@2.4.0 # 匹配路由路径表达式工
cnpm install --save video.js
cnpm install  --save js-cookie

cnpm install file-saver --save #文件保存
cnpm install --save jszip  #压缩
cnpm install --save xlsx #excel


```

# vite 功能特性

### 依赖构建

```js
/*
依赖预构建  全代码抛弃require 
1. vite将CommonJS或UMD发布的依赖项转换为 ESM 的语法规范 (esbuild实现), 放到node_modules/.vite/deps
2. 路径问题 , 强制 Vite 重新构建依赖，你可以用 --force 命令行选项启动开发服务器
3. 网络多包传输时, Vite 将有许多内部模块的ESM依赖关系转换为单个或几个模块, 只需要一个HTTP请求
4. @type import('vite').UserConfig   类型注释
*/
```

### 环境变量/全局常量

```js
/*
环境变量/dotenv  		定义常量define
1. mode 通过 --mode 指定
2. 在js中  使用 import.meta.env.VITE_xxx 使用环境变量
3. define: { NUM: JSON.stringify(1) }
*/
```

### 静态资源

- 配置 jsconfig.json 以识别 @

```js
/*
静态资源
1. 类似与babel, postcss主要工作是转议
2. 在js中  使用 import.meta.env.VITE_xxx 使用环境变量
3. define: { NUM: JSON.stringify(1) }
*/
```

### CSS

```js
/*
css
1. 类似与babel, postcss主要工作是转议
2. 在js中  使用 import.meta.env.VITE_xxx 使用环境变量
3. 较小的资源体积小于 assetsInlineLimit 选项值 则会被内联为 base64 data URL
*/
```

### 修改源码无效

- --force 刷新.vite 缓存

# SCSS

### :deep()

- ::v-deep 弃用

```css
:deep(.el-progress__text) {
}
```

https://blog.jetbrains.com/webstorm/2022/10/webstorm-2022-2-3/

https://youtrack.jetbrains.com/issue/WEB-58090/how-can-i-customize-my-own-template-code-when-i-use-alt-ctrlM-to-extract-Method

### 修改 css var

```js
const el = ref(null);
const cssVar = useCssVar('--el-color-primary', el);


// 等同于
const el = document.documentElement;
getComputedStyle(el).getPropertyValue('--el-color-primary')

/**
  1. 当属性--primary不存在时 默认 #d060d0
  2. 设置属性: document.getElementById('app').style.setProperty('--primary', 'red');
  2. 获取属性: document.getElementById('app').style.getPropertyValue('--primary')
  3. 通过以上方法设置主题
 */
$primary: var(--el-color-primary);
```

### filewatcher

```cmd
npm install -g sass
可使用  在项目的index.scss 下可查看编译好的源码
```

### 其他语法

```scss
!default //降低scss变量优先级
!global // 表示就用此值
 map.deep-merge  https://www.sasscss.com/documentation/modules/map
```

### 主题定制

# Vue3 语法

### props

```js
// defineProps无需 import 导入
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
});
const iconName = computed(() => `#icon-${props.iconClass}`);
```

### ref reactive

- ref 用于基本数据类型响应式 , 原理是
- reactive 用于对象数组类型的响应式

```js

```

### torefs

- 解构 props

```js

```

### defineExpose

- 子组件传值给父组件

```js
// 子组件 tree
const handleNodeClick = () => {
 console.log('要执行的方法')
}
//将方法暴露出
defineExpose({ handleNodeClick})


// 父组件  通过ref
<tree :show="show"  ref="treeRef"> </tree>
const treeRef = ref()
const handleClick = () => {
//获取ref中的子组件方法handleNodeClick()
 treeRef.value.handleNodeClick()
}
```

### 依赖注入

- 可以是响应式的

```js
provide("state", state);

const inj = inject("state");
```

### globalProperties

```js
const app = createApp(App);
app.config.globalProperties.$user = {
    name: '梅长苏',
    weapons: '长剑',
    title: '刺客'
}

<p>姓名：{{$user.name}} </p>

const { proxy } = getCurrentInstance()
console.log(proxy.$user)

```

### getCurrentInstance

- 获取当前组件实例

```js
const { proxy } = getCurrentInstance();
console.log(proxy.$user);
```

### 数组的响应式

```js
const state = ref([]);
state.value = [1, 2, 3];

const state = reactive({
  arr: [],
});
state.arr = [1, 2, 3];
```

# 工具

### 节流

```js
const debouncedFn = useDebounceFn((entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  console.log("output=>", width);
}, 1000);

useResizeObserver(app, debouncedFn);
```

### refs 替代

```js
<full-page class="full-page-view"  ref="fullPageView">

const fullPageView = ref();

const changeTab = (index) => {
  tabIndex.value = index;
  fullPageView.value.api.moveTo(index + 1);
};
```

# vue3 开发 uniapp

### 版本问题

- npm update 无法解决 去 main.fest 增加忽略
