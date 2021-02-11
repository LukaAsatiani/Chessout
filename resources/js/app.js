require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('main-panel-component', require('./components/MainPanelComponent.vue').default);
Vue.component('board-component', require('./components/BoardComponent.vue').default);
Vue.component('v-header', require('./components/Header.vue').default);
Vue.component('v-tool-panel', require('./components/ToolPanelComponent.vue').default)

import router from './router'

const app = new Vue({
    el: '#app',
    router,
    
});
