import axiosInstance from "../../axios";
// import {ACCESS_TOKEN_ADMIN} from "../../constants";

export default {
    async getListFoods(context) {
        try {
            let result = await axiosInstance.get("/api/sunshine/get-list-food")
            if (result.status === 200) {
                context.commit("GET_LIST_FOODS", result.data)
            }
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
    // get food of booking id
    async getFoodOfBookingByBookingId(context, bookingId) {
        console.log('get food of booking by bookingId :', bookingId)
        try {
            let result = await axiosInstance.get(`/api/sunshine/get-list-food?bookingId=${bookingId}`)
            if (result.status === 200) {
                context.commit('GET_LIST_FOOD_BY_BOOKINGID', result.data)
            }
        } catch (e) {
            return e
        }
    },
    // async addFoodToBookingByBookingId(context, {bookingId, [foodId, quantity]}) {
    //     try {
    //         let foodList =[
    //             {foodId: this.foodId,}
    //         ]
    //
    //         let response = {
    //             bookingId,
    //             foodList
    //         }
    //         let config = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_ADMIN)
    //             }
    //         }
    //         console.log('data add food to booking Id : ', response)
    //         let result = await axiosInstance.post('/api/admin/add-food-in-booking', response, config)
    //         if (result.status === 200) {
    //             await context.dispatch('getBookingTableById', bookingId)
    //         }
    //     } catch (e) {
    //         return e;
    //     }
    //
    // },
}