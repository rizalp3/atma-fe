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

import AtmaButton from './components/atma/AtmaButton.vue';
import AtmaButtonIcon from './components/atma/AtmaButtonIcon.vue';
import AtmaLinkPreview from './components/atma/AtmaLinkPreview.vue';
import AtmaModal from './components/atma/AtmaModal.vue';

import MixinDevice from './mixins/device';

const pinia = createPinia();
const vfm = createVfm();

const app = createApp(App);

app.use(pinia);
app.use(vfm);
app.use(router);
app.use(VCalendar, {});

app.component(VueFeather.name, VueFeather);

// Atma Component
app.component('AtmaButton', AtmaButton)
    .component('AtmaButtonIcon', AtmaButtonIcon)
    .component('AtmaLinkPreview', AtmaLinkPreview)
    .component('AtmaModal', AtmaModal);

app.mixin(MixinDevice);

app.mount('#app');
