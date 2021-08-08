import axiosInstance from "../../axios";
import {ACCESS_TOKEN_ADMIN} from "../../constants";

export default {
    async logOutAdmin() {
        try {
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_ADMIN)
                }
            }
            let result = await axiosInstance.post('api/auth/logout', null, config)
            if (result.status === 200) {
                alert(result.data.message)
                this.$cookie.delete('token');
                location.reload()
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}