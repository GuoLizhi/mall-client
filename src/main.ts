import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/styles/style.css';
import App from './App.vue';
import router from './routes/index';
import 'vant/es/toast/style';

const pinia = createPinia();

createApp(App).use(router).use(pinia)
  .mount('#app');
