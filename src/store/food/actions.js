import axiosInstance from "../../axios";

export default {
    async getListFoods(context) {
        try {
            let data = (await axiosInstance.get("/api/sunshine/get-list-food")).data
            context.commit("GET_LIST_FOODS", data)
        } catch (e) {
            return e;
        }
    },
    async getFoodDetail(context, foodId) {
        try {
            let result = await axiosInstance.get(`/api/sunshine/get-food/${foodId}`)
            if (result.status === 200) {
                context.commit('GET_FOOD_DETAIL', result.data)
            }
        } catch (e) {
            return e
        }
    },
    async getListFoodByBookingId(context, bookingId) {
        try {
            let result = await axiosInstance.get(`/api/sunshine/get-list-food?bookingId=${bookingId}`)
            if (result.status === 200) {
                context.commit('GET_LIST_FOOD_BY_BOOKING_ID', result.data)
            }
        } catch (e) {
            return e
        }

    }
}