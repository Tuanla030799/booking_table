import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/components/Home.vue";
import ChangePassWord from "../views/components/ChangePassWord.vue"

import CustomerSignIn from "../views/customer/CustomerSignIn.vue";
import CustomerForgot from "../views/customer/CustomerForgot.vue";
import CustomerRegister from "../views/customer/CustomerRegister";
import BookingTable from "../views/admin/components/BookingTable";
import AdminPage from "../views/admin/page/AdminPage";


Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/Signin",
        name: 'Đăng nhập',
        component: CustomerSignIn,
    },
    {
        path: "/register",
        name: 'Đăng ký',
        component: CustomerRegister
    },
    {
        path: "/forgotpass",
        name: 'Quên mật khẩu',
        component: CustomerForgot
    },
    {
        path: "/change-password",
        name: "Đổi mật khẩu",
        component: ChangePassWord
    },
    {
        path: "/booking-list",
        name: "booking-list",
        component: BookingTable
    },
    {
        path:"/admin",
        name:"admin",
        component: AdminPage
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
