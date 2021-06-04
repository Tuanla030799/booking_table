import Vue from "vue"
import Vuex from "vuex"
import axiosInstance from "../axios";
import customer from './customer'
import food from "./food"

Vue.use(Vuex)
export default new Vuex.Store({
    strict: true,
    modules:{
        customer,
        food
    },
    // state
    state: {
        bookingTables: [],
        bookingById:[]
    },
    getters: {
        getBookingTables: (state) => state.bookingTables,
        getBookingTableById: (state) => state.bookingById
    },
    mutations: {
        LIST_BOOKING_TABLES: (state, data) => {
            state.bookingTables = data
        },
        BOOKING_TABLE_BY_ID: (state, data) =>{
            state.bookingById = data
        }
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
        async getBookingTableById(context, bookingId){
            let data = await  axiosInstance.get("/api/customer/booking-history-detail", bookingId)
            context.commit("BOOKING_TABLE_BY_ID", data)
        }
    }
})