import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#E50064',
                accent: '#f0f4fa',
            },
            dark: {
                primary: '#E50064',
                accent: '#f0f4fa',
            }
        }
    }
});
