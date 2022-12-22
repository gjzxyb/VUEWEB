import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';
import '@/assets/css/reset.css';
import '@/assets/css/index.css';
import 'virtual:svg-icons-register';
import svgIcon from '@/icons/svg-icon.vue';



const app = createApp(App);
app.component('SvgIcon', svgIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
