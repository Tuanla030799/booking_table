import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios";
import {ACCESS_TOKEN_ADMIN} from "../constants";

Vue.use(VueAxios, axios)

const axiosInstance = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_URL}`,
    headers: {
        'Accept': 'application/json',
        // 'Authorization':'Bearer ' + token
    }
})
axiosInstance.interceptors.request.use(function (config) {
    // eslint-disable-next-line no-undef
    const token = localStorage.getItem(ACCESS_TOKEN_ADMIN);
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});
export default axiosInstance