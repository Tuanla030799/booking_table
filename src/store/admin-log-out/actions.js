import axiosInstance from "../../axios";
import {ACCESS_TOKEN_ADMIN} from "../../constants";

export default {
    async logOutAdmin() {
        try {
            let result = await axiosInstance.post('api/auth/logout')
            if (result.status === 200) {
                localStorage.removeItem(ACCESS_TOKEN_ADMIN)
                    alert('log out success !')
            }
        } catch (e) {
            return e
        }
    }
}