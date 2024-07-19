import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVfm } from 'vue-final-modal';

// Moment
import moment from 'moment';
import 'moment/dist/locale/id';

// Vue Feather
import VueFeather from 'vue-feather';

// Boostrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// VCalendar
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// VTooltip
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';

// Swiper
import 'swiper/css/bundle';

// Vue Router
import router from './router';

// Vue Final Modal
import 'vue-final-modal/style.css';

// Material Symbols
import 'material-symbols/rounded.css';

// Base Style
import './assets/main.css';

import App from './App.vue';

import AtmaButton from './components/atma/AtmaButton.vue';
import AtmaButtonIcon from './components/atma/AtmaButtonIcon.vue';
import AtmaIcon from './components/atma/AtmaIcon.vue';
import AtmaLinkPreview from './components/atma/AtmaLinkPreview.vue';
import AtmaMarkdown from './components/atma/AtmaMarkdown.vue';
import AtmaModal from './components/atma/AtmaModal.vue';
import AtmaSkeleton from './components/atma/AtmaSkeleton.vue';
import AtmaText from './components/atma/AtmaText.vue';

import MixinDevice from './mixins/device';
import MixinUtilities from './mixins/utilities';

import i18n from './locales';

const pinia = createPinia();
const vfm = createVfm();

const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(vfm);
app.use(router);
app.use(VCalendar, {});
app.use(FloatingVue, {
    distance: 8,
    themes: { tooltip: { delay: { show: 0 } } }
});

app.component(VueFeather.name, VueFeather);

// Atma Component
app.component('AtmaButton', AtmaButton)
    .component('AtmaButtonIcon', AtmaButtonIcon)
    .component('AtmaIcon', AtmaIcon)
    .component('AtmaLinkPreview', AtmaLinkPreview)
    .component('AtmaMarkdown', AtmaMarkdown)
    .component('AtmaModal', AtmaModal)
    .component('AtmaSkeleton', AtmaSkeleton)
    .component('AtmaText', AtmaText);

app.mixin(MixinDevice);
app.mixin(MixinUtilities);

// Moment Setup
moment.locale('id');
app.config.globalProperties.moment = moment;

app.mount('#app');
