import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios";
import {ACCESS_TOKEN_ADMIN} from "../constants";

Vue.use(VueAxios, axios)

const axiosInstance = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_URL}`,
    headers: {
        'accept': 'application/json'
    }
})
axiosInstance.interceptors.request.use(function (config) {
        const token = localStorage.getItem(ACCESS_TOKEN_ADMIN)
        config.headers['Content-Type'] = 'application/json'
        config.headers.Authorization = token ? `Bearer ${token}` : ''
        return config;
    }, function (error) {
        return Promise.reject(error)
    }
);
export default axiosInstance