import Vue from "vue"
import Vuex from "vuex"
import axiosInstance from "../axios";
import customer from './customer'
import food from "./food"
import {ACCESS_TOKEN_ADMIN} from "../constants";

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
                console.log('result list booking table : ', result)
                context.commit("LIST_BOOKING_TABLES", result)
            } catch (e) {
                return e
            }
        },
        async getBookingTableById(context, bookingId) {
            try {
                let result = await axiosInstance.get(`/api/customer/booking-history-detail/${bookingId}`)
                console.log("result ", result)
                if (result.status === 200) {
                    context.commit("BOOKING_DETAIL", result.data)
                }
            } catch (e) {
                return e
            }

        },

        async cancelBookingById(context, {bookingId = ''}) {
            try {
                let data = {
                    bookingId
                }
                let config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_ADMIN)
                    }
                }
                console.log('data: ', data)
                let result = await axiosInstance.post('/api/admin/cancel-booking-admin', data, config)
                console.log('cancel: ', result)
                if (result.data.status === 200) {
                    let resultListBooking = await context.dispatch('getBookingTableById', bookingId)
                    console.log('resultListBooking: ', resultListBooking.data)
                    if (resultListBooking.data.status === 200) {
                        context.commit('LIST_BOOKING_TABLES', resultListBooking.data)
                    }
                    return {
                        ok: true,
                        data: result.data,
                        error: null
                    }
                } else {
                    return {
                        ok: false,
                        error: result.data.error
                    }
                }

            } catch (e) {
                return {
                    ok: false,
                    error: e.message
                }
            }

        }
    }
})