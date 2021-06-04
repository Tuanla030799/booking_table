import axiosInstance from "../../axios";

export default{
    async getListCustomer(context){
        try{
            let data = (await axiosInstance.get("/api/admin/list-user")).data
            context.commit('GET_LIST_CUSTOMER', data)
        }catch (e) {
            return e;
        }

    }
}