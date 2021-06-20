import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCookie from 'vue-cookie'
//import * as localA from "../src/assets/main.js";
import Vuex from 'vuex';
import LoadScript from 'vue-plugin-load-script';Vue.use(LoadScript);
import store from './store/index'

Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin


Vue.use(VueRouter)

Vue.use(VueCookie)

Vue.use(IconsPlugin)
Vue.use(Vuex)
// Vue.loadScript(localA).then(() => {
//   console.log("SUCESS")
// }).catch(() => {
//   console.log("FAILED")
// })

new Vue({
    router,
    store,
    vuetify,
    VueCookie,
    render: h => h(App)
}).$mount('#app')