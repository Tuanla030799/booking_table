import axiosInstance from "../../axios";

export default {
    /**
     * find list sale
     * @param context
     * @return list sale of sushine
     * */
    async getListSales(context) {
        let result = await axiosInstance.get('/api/sunshine/get-list-sale-admin')
        if (result.status === 200) {
            context.commit('LIST_SALE', result.data)
        }
    },
    /**
     * get sale detail
     * @param context
     * @param saleId
     * @return sale detail
     * */
    async getSaleDetailForAdmin(context, saleId = '') {
        try {
            let result = await axiosInstance.get(`/api/sunshine/sale-detail/${saleId}`)
            if (result.status === 200) {
                context.commit('SALE_DETAIL', result.data)
            }
        }catch (err){
            alert(err.response.data.message)
        }
    },

    /**
     * remove sale by saleId
     * @param context
     * @param saleId
     * @return String message
     * */
    async removeSaleInSunshine(context, saleId = '') {
        try {
            let result = await axiosInstance.post(`/api/admin/disable-sale/${saleId}`)
            console.log('result remove: ', result)
            if (result.status === 200) {
                alert(result.data.message)
                await context.dispatch('getSaleDetailForAdmin', saleId)
            }
        }catch (err){
            alert(err.response.data.message)
        }

    },

    // chua co response ban len
    // async addSaleInSunshine(context, )
}