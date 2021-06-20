import axiosInstance from "../../axios";
import {ACCESS_TOKEN_ADMIN} from "../../constants";

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
    async addFoodToBookingByBookingId(context, {bookingId, foodId, quantity}) {
        console.log('booking Id : ' + bookingId + 'foodId: ' + foodId + 'quantity: ', quantity)
        try {
            let foodList = [
                {foodId, quantity}
            ]

            let response = {
                bookingId,
                foodList
            }
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_ADMIN)
                }
            }
            console.log('data add food to booking Id : ', response)
            let result = await axiosInstance.post('/api/admin/add-food-in-booking', response, config)
            if (result.data.status === 200) {
                return {
                    ok: true,
                    data: result.data,
                    error: null
                }
            }
        } catch (e) {
            return e;
        }

    },
}