import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/components/Home.vue";
import ChangePassWord from "../views/components/ChangePassWord.vue"

import CustomerSignIn from "../views/customer/CustomerSignIn.vue";
import CustomerForgot from "../views/customer/CustomerForgot.vue";
import CustomerRegister from "../views/customer/CustomerRegister.vue";
import ChooseFoot from "../views/foots/ChooseFoot.vue";
import CustomerInformation from "../views/customer/CustomerInformation.vue"
import AdminPage from "../admin/pages/AdminPage";
import AdminBooking from "../admin/components/admin-booking/AdminBooking";
import AdminFood from "../admin/components/admin-food/AdminFood";
import AdminBookingDetail from "../admin/components/admin-booking/AdminBookingDetail";
import AdminCustomer from "../admin/components/admin-customer/AdminCustomer";
import AdminFoodDetail from "../admin/components/admin-food/AdminFoodDetail";
import AdminCustomerDetail from "../admin/components/admin-customer/AdminCustomerDetail";
import CustomerPage from "../views/CustomerPage";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "customer",
        component: CustomerPage,
        children: [
            {
                path: '',
                name:'Home',
                component: Home
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
                path: "/choose-foot",
                name: "Chọn món ăn",
                component: ChooseFoot
            },

            {
                path: "/information",
                name: "Thông tin",
                component: CustomerInformation
            }
        ]
    },

    {
        path: "/admin/",
        name: "admin",
        component: AdminPage,
        children: [
            {
                path: 'booking',
                name: 'booking',
                component: AdminBooking
            },
            {
                path: 'booking-detail/:bookingId',
                name: 'booking-detail',
                component: AdminBookingDetail
            },
            {
                path: 'foods',
                name: 'foods',
                component: AdminFood
            },
            {
                path: 'food-detail/:foodId',
                name: 'food-detail',
                component: AdminFoodDetail
            },
            {
                path: 'customers',
                name: 'admin-customers',
                component: AdminCustomer
            },
            {
                path: 'customer-detail/:email',
                name: 'customer-detail',
                component: AdminCustomerDetail
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
