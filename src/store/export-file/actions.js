import {ACCESS_TOKEN_ADMIN} from "../../constants";
import axiosInstance from "../../axios";

export default {
    async exportFile(context, {year=0, exportType='', confirmSendEmail=''}) {
        try {
            let request = {
                year,
                exportType,
                confirmSendEmail
            }
            console.log('request export file :', request)
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_ADMIN)
                }
            }
            let result = await  axiosInstance.post('/api/admin/export-file', request, config)
            if (result.status === 200){
                alert('Xuất file báo cáo thành công !')
            }


        } catch (e) {
            alert(e.response.data.message)
        }
    }

}