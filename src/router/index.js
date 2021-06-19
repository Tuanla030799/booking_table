import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/components/Home.vue";
import ChangePassWord from "../views/components/ChangePassWord.vue"

import CustomerSignIn from "../views/customer/CustomerSignIn.vue";
import CustomerForgot from "../views/customer/CustomerForgot.vue";
import CustomerRegister from "../views/customer/CustomerRegister.vue";
import ChooseFoot from "../views/foots/ChooseFoot.vue";
import CustomerInformation from "../views/customer/CustomerInformation.vue";
import CustomerChat from "../views/customer/CustomerChat.vue";
import CustomerHistory from "../views/customer/CustomerHistory.vue";
import CustomerPage from "../views/components/CustomerPage.vue";

Vue.use(VueRouter);
const routes = [
    {
        path: "/Customer",
        name: "customer",
        component: CustomerPage,
        //redirect: '/defaultview',
        children: [
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
                path: "/choose-foot",
                name: "Chọn món ăn",
                component: ChooseFoot
            },
            {
                path: "/information",
                name: "Thông tin",
                component: CustomerInformation
            },
            {
                path: "/chat",
                name: "chat",
                component: CustomerChat
            },
            {
                path: "/customer-history",
                name: "lịch sử đặt bàn",
                component: CustomerHistory
            },
            {
                path: "/*",
                name: 'Home',
                component: Home,
            },
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
