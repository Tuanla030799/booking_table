import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'


import Home from './views/components/Home.vue'

import CustomerSignIn from './views/customer/CustomerSignIn.vue'
import CustomerForgot from './views/customer/CustomerForgot.vue'
import CustomerRegister from './views/customer/CustomerRegister'

Vue.config.productionTip = false

//1 dinh ngia cac path
const routes = [
    { path: '/', component: Home },
    { path: '/Signin', component: CustomerSignIn },
    { path: '/register', component: CustomerRegister },
    { path: '/forgotpass', component: CustomerForgot },
]

//2. khoi tao router:
const router = new VueRouter({
    mode: 'history',
    routes
})

// //khai bao su dung vue-router:
Vue.use(VueRouter)

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')