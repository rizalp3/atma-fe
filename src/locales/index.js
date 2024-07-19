import { createI18n } from 'vue-i18n';

import id from './_id';
import en from './_en';

export default createI18n({
    locale: 'id',
    fallbackLocale: 'en',
    messages: { id, en }
});
