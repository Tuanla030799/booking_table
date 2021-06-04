import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios";
import {ACCESS_TOKEN_ADMIN} from "../constants";

Vue.use(VueAxios, axios)

const token = localStorage.getItem(ACCESS_TOKEN_ADMIN)

const axiosInstance = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_URL}`,
    timeout:1000,
    headers: {
        'Accept': 'application/json',
        'Authorization':`Bearer ${token}`,
    }
})
export default axiosInstance