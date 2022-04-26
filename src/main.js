import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/scss/index.scss';

createApp(App)
  .use(Antd)
  .mount('#app')
