import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVfm } from 'vue-final-modal';

// Vue Feather
import VueFeather from 'vue-feather';

// Boostrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// VCalendar
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// Swiper
import 'swiper/css/bundle';

// Vue Router
import router from './router';

// Vue Final Modal
import 'vue-final-modal/style.css';

// Base Style
import './assets/main.css';

import App from './App.vue';

const pinia = createPinia();
const vfm = createVfm();

const app = createApp(App);

app.use(pinia);
app.use(vfm);
app.use(router);
app.use(VCalendar, {});

app.component(VueFeather.name, VueFeather);

app.mount('#app');
