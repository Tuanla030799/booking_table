import Vue from "vue"
import Vuex from "vuex"
import axiosInstance from "../axios";
import customer from './customer'
import food from "./food"

Vue.use(Vuex)
export default new Vuex.Store({
    strict: true,
    modules: {
        customer,
        food
    },
    // state
    state: {
        bookingTables: [],
        bookingDetail: [],
    },
    getters: {
        getBookingTables: (state) => state.bookingTables,
        getBookingDetail: (state) => state.bookingDetail,
    },
    mutations: {
        LIST_BOOKING_TABLES: (state, data) => {
            state.bookingTables = data
        },
        BOOKING_DETAIL: (state, data) => {
            state.bookingDetail = data
        },
    },
    actions: {
        async getBookingTables(context) {
            try {
                let result = (await axiosInstance.get("/api/admin/get-list-booking")).data
                context.commit("LIST_BOOKING_TABLES", result)
            } catch (e) {
                return e
            }
        },
        async getBookingTableById(context, bookingId) {
            try {
                let result = (await axiosInstance.get(`/api/customer/booking-history-detail/${bookingId}`)).data
                context.commit("BOOKING_DETAIL", result)
            } catch (e) {
                return e
            }

        }
    }
})