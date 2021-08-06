import axiosInstance from "../../axios";
import {ACCESS_TOKEN_ADMIN} from "../../constants";

export default {
    async getListPayment(context) {
        try {
            let result = await axiosInstance.get("/api/admin/get-list-charging-confirm")
            console.log('result pay: ', result)
            if (result.status === 200) {
                context.commit('LIST_PAY', result.data)
            }
        } catch (e) {
            return e.response.message
        }
    },
    async acceptPay(context, id = 0) {
        try {
            let request = {
                id,
                status: parseInt('1')
            }
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_ADMIN)
                }
            }
            let result = await axiosInstance.put(`/api/admin/confirm-charging?id=${request.id}&status=${request.status}`,null, config)
            if (result.status === 200) {
                console.log(result)
                await context.dispatch('getListPayment')
            }
        } catch (err) {
            console.log('error: ', err.response.data.message)
            alert(err.response.data.message)

        }
    },
    async cancelPay(context, id = 0) {
        try {
            let request = {
                id: parseInt(id),
                status: 2
            }
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_ADMIN)
                }
            }
            let result = await axiosInstance.options(`/api/admin/confirm-charging?id=${request.id}&status=${request.status}`, config)
            if (result.status === 200) {
                await context.dispatch('getListPayment')
            }
        } catch (e) {
            return e
        }
    }
}