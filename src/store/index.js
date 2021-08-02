import Vue from "vue"
import Vuex from "vuex"
import axiosInstance from "../axios";
import customer from './customer'
import food from "./food"
import sale from './sale'
import pay from './payment'
import exportFile from './export-file'
import logOut from './admin-log-out'
import {ACCESS_TOKEN_ADMIN} from "../constants";

Vue.use(Vuex)
export default new Vuex.Store({
    strict: true,
    modules: {
        customer,
        food,
        sale,
        pay,
        exportFile,
        logOut
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
                let result = (await axiosInstance.get("/api/admin/get-list-booking"))
                console.log('result list booking table : ', result.data)
                if (result.status === 200) {
                    context.commit('LIST_BOOKING_TABLES', result.data)
                }
            } catch (e) {
                return e
            }
        },
        async getBookingTableById(context, bookingId) {
            try {
                let result = await axiosInstance.get(`/api/customer/booking-history-detail/${bookingId}`)
                console.log("result ", result)
                if (result.status === 200) {
                    context.commit('BOOKING_DETAIL', result.data)
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
                if (result.status === 200) {
                    let resultListBooking = await context.dispatch('getBookingTableById', bookingId)
                    console.log('resultListBooking: ', resultListBooking.data)
                    if (resultListBooking.status === 200) {
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

        },
        async payBookingTableByBookingId(context, bookingId = '') {
            console.log('pay booking table by booking id : ', bookingId)
            try {
                let result = await axiosInstance.post(`/api/admin/pay-bill/${bookingId}`)
                if (result.status === 200) {
                    await context.dispatch('getBookingTableById', bookingId)
                }
            } catch (e) {
                return e;
            }
        },
        async exportBillForCustomerByBookingId(context, bookingId = '') {
            console.log('export bill by bookingID: ', bookingId)
            let result = await axiosInstance.get(`/api/admin/export-bill/${bookingId}`)
            if (result.status === 200) {
                return {
                    ok: true
                }
            }
        }
    },

})