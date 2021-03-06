import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/components/Home.vue";
import ChangePassWord from "../views/components/ChangePassWord.vue"

import CustomerSignIn from "../views/customer/CustomerSignIn.vue";
import CustomerForgot from "../views/customer/CustomerForgot.vue";
import CustomerRegister from "../views/customer/CustomerRegister.vue";
import ChooseFoot from "../views/foots/ChooseFoot.vue";
import CustomerChat from "../views/customer/CustomerChat.vue";
import CustomerHistory from "../views/customer/CustomerHistory.vue";
import CustomerHistoryPayment from "../views/customer/CustomerHistoryPayment.vue"
import CustomerInformation from "../views/customer/CustomerInformation.vue"
import AdminPage from "../admin/pages/AdminPage";
import AdminBooking from "../admin/components/admin-booking/AdminBooking";
import AdminFood from "../admin/components/admin-food/AdminFood";
import AdminCustomer from "../admin/components/admin-customer/AdminCustomer";
import CustomerPage from "../views/components/CustomerPage.vue";
import AdminBookingDetail from "../admin/components/admin-booking/AdminBookingDetail";
import AdminBookingAddFood from "../admin/components/admin-booking/AdminBookingAddFood";
import AdminCustomerDetail from "../admin/components/admin-customer/AdminCustomerDetail";
import AdminFooterDetail from "../admin/components/admin-food/AdminFooterDetail";
import AdminSale from "../admin/components/admin-sale/AdminSale";
import AdminSaleDetail from "../admin/components/admin-sale/AdminSaleDetail";
import AdminPaymentCustomer from "../admin/components/admin-pay/AdminPaymentCustomer";
import AdminNotFound from "../admin/components/admin-notfound/AdminNotFound";
import AdminExportFile from "../admin/components/admin-export/AdminExportFile";

Vue.use(VueRouter);
const routes = [
    {
        path: "/admin",
        name: "admin",
        component: AdminPage,
        children: [
            {
                path: 'bookings',
                name: 'bookings',
                component: AdminBooking
            },
            {
                path: '/bookings/:bookingId',
                name: 'booking-detail',
                component: AdminBookingDetail
            },
            {
                path: '/bookings/:bookingId/booking-add-food',
                name: 'booking-add-food',
                component: AdminBookingAddFood
            },
            {
                path: 'foods',
                name: 'foods',
                component: AdminFood
            },
            {
                path: '/foods/:foodId',
                name: 'food-detail',
                component: AdminFooterDetail
            },
            {
                path: 'customers',
                name: 'admin-customers',
                component: AdminCustomer
            }
            ,
            {
                path: '/customers/:email',
                name: 'customer-detail',
                component: AdminCustomerDetail
            },
            {
                path: 'sales',
                name: 'sales',
                component: AdminSale
            },
            {
                path: '/sales/:saleId',
                name: 'sale-detail',
                component: AdminSaleDetail
            },
            {
                path: 'payments',
                name: 'payments',
                component: AdminPaymentCustomer
            },
            {
                path:'exports',
                name:'exports',
                component: AdminExportFile
            },
            {
                path: "*",
                name: 'admin-notfound',
                component: AdminNotFound
            }
        ]
    },
    {
        path: "/Customer",
        name: "customer",
        component: CustomerPage,
        //redirect: '/defaultview',
        children: [
            {
                path: "/Signin",
                name: '????ng nh???p',
                component: CustomerSignIn,
            },
            {
                path: "/register",
                name: '????ng k??',
                component: CustomerRegister
            },
            {
                path: "/forgotpass",
                name: 'Qu??n m???t kh???u',
                component: CustomerForgot
            },
            {
                path: "/change-password",
                name: "?????i m???t kh???u",
                component: ChangePassWord
            },
            {
                path: "/choose-foot",
                name: "Ch???n m??n ??n",
                component: ChooseFoot
            },
            {
                path: "/information",
                name: "Th??ng tin",
                component: CustomerInformation
            },
            {
                path: "/chat",
                name: "chat",
                component: CustomerChat
            },
            {
                path: "/customer-history",
                name: "l???ch s??? ?????t b??n",
                component: CustomerHistory
            },
            {
                path: "/customer-history-payment",
                name: "l???ch s??? n???p ti???n",
                component: CustomerHistoryPayment
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
