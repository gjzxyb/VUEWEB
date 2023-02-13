import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import 'uno.css'
import '@/assets/css/index.scss'
import 'animate.css'
import 'element-plus/dist/index.css'
import moment from 'moment'
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/svg-icon.vue'
import echarts from './utils/echarts'

const app = createApp(App)

app.component('SvgIcon', svgIcon)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$moment = moment
app.config.globalProperties.$echarts = echarts

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
