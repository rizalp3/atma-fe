import { createApp } from 'vue';
import VueFeather from 'vue-feather';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/main.css';

import router from './router';

import App from './App.vue';

const app = createApp(App);

app.use(router);

app.component(VueFeather.name, VueFeather);

app.mount('#app');
