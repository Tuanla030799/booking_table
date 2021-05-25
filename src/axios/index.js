import Vue from "vue"
import Axios from "axios";
import VueAxios from "vue-axios"
import {ACCESS_TOKEN_ADMIN} from "../constants";

Vue.use(VueAxios, Axios)
const token = localStorage.getItem(ACCESS_TOKEN_ADMIN)
const authHeader = token ? {'Authorization': 'Bearer ' + token} : {}
const axiosInstance = Axios.create({
    baseURL:`${process.env.VUE_APP_BASE_URL}`,
    headers: {
        ...authHeader,
        "accept": "application/json"
    }
})
export default axiosInstance;
