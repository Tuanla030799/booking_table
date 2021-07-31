import axiosInstance from "../../axios";
import {ACCESS_TOKEN_ADMIN} from "../../constants";

export default {
    async getListCustomer(context) {
        try {
            let result = await axiosInstance.get("/api/admin/list-user")
            console.log('result list customer : ', result.data)
            if (result.status === 200) {
                context.commit('GET_LIST_CUSTOMER', result.data)
            }
        } catch (e) {
            return e;
        }
    },
    async getCustomerDetail(context, email) {
        try {
            let result = await axiosInstance.get(`/api/admin/user-detail/${email}`)
            console.log(result)
            if (result.status === 200) {
                context.commit('GET_CUSTOMER_DETAIL', result.data)
            }
        } catch (e) {
            return e
        }
    },
    async paymentMoneyForCustomer(context, {email = '', money = 0}) {

        try {
            let request = {
                email,
                money
            }
            console.log('request : ', request)
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_ADMIN)
                }
            }
            let result = await axiosInstance.post('/api/admin/Charging', request, config)
            if (result.status === 200) {
                await context.dispatch('getCustomerDetail', request.email)
            }
        } catch (e) {
            return e
        }
    },
    async lockAccountCustomerByEmail(context, email = '') {
        console.log('email lock : ', email)
        let result = await axiosInstance.post(`/api/admin/disable-customer/${email}`)
        console.log('result lock account : ', result);
        if (result.status === 200) {
            await context.dispatch('getCustomerDetail', email)
        }
    }
}