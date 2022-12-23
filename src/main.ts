import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';
import '@/assets/css/reset.css';
import '@/assets/css/index.css';
import 'animate.css';
import 'uno.css';
import moment from 'moment';
import 'virtual:svg-icons-register';
import svgIcon from '@/icons/svg-icon.vue';
import echarts from './utils/echarts';


const app = createApp(App);
app.component('SvgIcon', svgIcon);
app.use(createPinia());
app.use(router);
app.config.globalProperties.$moment = moment;
app.config.globalProperties.$echarts = echarts;
app.mount('#app');

