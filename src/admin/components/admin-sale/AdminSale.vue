<template>
  <v-container fluid>
    <v-card class="food-page" elevation="10">
      <v-card-title>
        DANH SÁCH CHƯƠNG TRÌNH KHUYẾN MẠI
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="listSaleForAdmin"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.saleId">
            <td>{{ item.saleId }}</td>
            <td>
              <v-img :src="item.saleImage" max-width="100px" max-height="100px"></v-img>
            </td>
            <td>{{ item.saleTitle }}</td>
            <td>{{ item.saleStatus }}</td>
            <td>{{ item.percentDiscount }}</td>
            <td>{{ item.beneficiary }}</td>
            <td>
              <router-link :to="{name:'sale-detail' , params:{saleId:item.saleId}}" tag="div">
                <v-btn
                    color="info"
                >
                  <v-icon dark>
                    mdi-delete
                  </v-icon>
                </v-btn>
              </router-link>
            </td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AdminSale",
  data() {
    return {
      saleId: '',
      headers: [
        {text: 'Mã Sale', value: 'saleId'},
        {text: 'Ảnh Sale', value: 'saleImage'},
        {text: 'Mô tả', value: 'saleTitle'},
        {text: 'Trạng thái', value: 'saleStatus'},
        {text: 'Phần Trăm', value: 'percentDiscount'},
        {text: 'Đối Tượng', value: 'beneficiary'},
        {text: 'Xóa', value: 'actions', sortable: false},
      ]
    }
  },
  methods: {
    ...mapActions({
      getListSalesForAdmin: 'getListSales'
    }),
    handleGetListSales() {
      this.getListSalesForAdmin();
    },
  },
  computed: {
    ...mapGetters({
      listSaleForAdmin: 'getListSale'
    })
  },
  created() {
    this.handleGetListSales()
  }
}
</script>

<style scoped>

</style>