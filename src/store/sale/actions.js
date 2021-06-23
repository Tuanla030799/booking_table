import axiosInstance from "../../axios";

export default {
    /**
     * find list sale
     * @param context
     * @return list sale of sushine
     * */
    async getListSales(context) {
        let result = await axiosInstance.get('/api/sunshine/get-list-sale')
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
        let result = await axiosInstance.get(`/api/sunshine/sale-detail/${saleId}`)
        if (result.status === 200) {
            context.commit('SALE_DETAIL', result.data)
        }
    },

    /**
     * remove sale by saleId
     * @param context
     * @param saleId
     * @return String message
     * */
    async removeSaleInSunshine(context, saleId = '') {
        let result = await axiosInstance.post(`/api/admin/disable-sale/${saleId}`)
        if (result.status === 200) {
            await context.dispatch('getSaleDetailForAdmin')
        }
    }
}