import Vue from 'vue'

import Button     from './button.vue';
import InputText  from './input-text.vue';
import InputRadio from './input-radio.vue';
import Toast      from './toast.vue';

Vue.component('ui-button',      Button);
Vue.component('ui-input-text',  InputText);
Vue.component('ui-input-radio', InputRadio);
Vue.component('ui-toast',       Toast);
