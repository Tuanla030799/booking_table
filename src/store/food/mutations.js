export default {
    GET_LIST_FOODS(state, data) {
        state.listFoods = data
    },
    GET_FOOD_DETAIL(state, data) {
        state.foodDetail = data
    },
    GET_LIST_FOOD_BY_BOOKING_ID(state, data) {
        state.listFoodByBookingId = data
    }
}