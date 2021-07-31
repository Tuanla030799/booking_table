import axiosInstance from "../../axios";

export default {
    async getListPayment(context) {
        try {
            let result = await axiosInstance.get("/api/admin/get-list-charging-confirm")
            console.log('result pay: ', result)
            if (result.status === 200) {
                context.commit('LIST_PAY', result.data)
            }
        } catch (e) {
            return e.message
        }
    },
    async acceptPay(context, id) {
        try {
            let request = {
                id,
                status: 1
            }
            let result = await axiosInstance.put(`/api/admin/confirm-charging?id=${request.id}&status=${request.status}`)
            if (result.status === 200) {
                await context.dispatch('getListPayment')
            }
        } catch (e) {
            return e
        }
    },
    async cancelPay(context, id) {
        try {
            let request = {
                id,
                status: 2
            }
            let result = await axiosInstance.put(`/api/admin/confirm-charging?id=${request.id}&status=${request.status}`)
            if (result.status === 200) {
                await context.dispatch('getListPayment')
            }
        } catch (e) {
            return e
        }
    }
}