import Vue from "vue"
import Vuex from "vuex"
import axiosInstance from "../axios";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        lists: []
    },
    getters: {
        listBooking: (state) => {
            return state.lists
        }
    },
    mutations: {
        LIST_BOOKING(state, data) {
            state.lists = data
        }
    },
    actions: {
        async getListBooking(context) {
            let result = (await axiosInstance.get("/api/admin/get-list-booking")).data
            console.log("result : ", result)
            context.commit("LIST_BOOKING", result)
        }
    }
})