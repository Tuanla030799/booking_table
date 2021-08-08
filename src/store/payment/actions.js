import axiosInstance from "../../axios";
// import {ACCESS_TOKEN_ADMIN} from "../../constants";

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
            let result = await axiosInstance.post(`/api/admin/confirm-charging?id=${request.id}&status=${request.status}`)
            if (result.status === 200) {
                alert(result.data.message)
                await context.dispatch('getListPayment')
            }
        } catch (err) {
            console.log('error: ', err.response)
            alert(err.response.data.message)


        }
    },
    async cancelPay(context, id = 0) {
        try {
            let request = {
                id: parseInt(id),
                status: 2
            }
            let result = await axiosInstance.post(`/api/admin/confirm-charging?id=${request.id}&status=${request.status}`)
            if (result.status === 200) {
                alert(result.data.message)
                await context.dispatch('getListPayment')
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}