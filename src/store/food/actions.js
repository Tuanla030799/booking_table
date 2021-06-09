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
            let result = (await axiosInstance.get(`/api/sunshine/get-food/${foodId}`)).data
            context.commit('GET_FOOD_DETAIL', result)
        } catch (e) {
            return e
        }
    }
}