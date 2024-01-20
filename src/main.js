import { createApp } from 'vue';

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

// Base Style
import './assets/main.css';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(VCalendar, {});

app.component(VueFeather.name, VueFeather);

app.mount('#app');
