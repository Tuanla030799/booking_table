import axiosInstance from "../../axios";

export default {
    async getListCustomer(context) {
        try {
            let data = (await axiosInstance.get("/api/admin/list-user")).data
            context.commit('GET_LIST_CUSTOMER', data)
        } catch (e) {
            return e;
        }
    },
    async getCustomerDetail(context, email) {
        try {
            let result = (await axiosInstance.get(`/api/admin/user-detail/${email}`)).data
            context.commit('GET_CUSTOMER_DETAIL', result)
        } catch (e) {
            return e
        }
    }
}