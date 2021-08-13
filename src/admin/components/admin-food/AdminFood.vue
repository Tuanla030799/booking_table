<template>
  <v-container id="food" fluid>
    <v-card class="food-page" elevation="10">
      <v-card-title>
        DANH SÁCH MÓN ĂN
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="listFoods"
          :items-per-page="5"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.foodId">
            <td>{{ item.foodId }}</td>
            <td>{{ item.foodName }}</td>
            <td>{{ item.foodPrice }}</td>
            <td>{{ item.quantity }}</td>
            <td :style="styleColorStatus(item.status)">{{convetStatus(item.status)}}</td>
            <td>{{ item.describes }}</td>
            <td>
              <router-link :to="{name:'food-detail', params:{foodId:item.foodId}}" tag="div">
                <v-btn
                    color="info"
                >
                  <v-icon dark>
                    mdi-clipboard-edit-outline
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
  name: "AdminFood",
  data() {
    return {
      headers: [
        {text: 'Mã Món Ăn', value: 'foodId'},
        {text: 'Tên Món Ăn', value: 'foodName'},
        {text: 'Giá ', value: 'foodPrice'},
        {text: 'Số Lượng', value: 'quantity'},
        {text: 'Trạng Thái', value: 'status'},
        {text: 'Mô Tả', value: 'describes'},
        {text: 'Chi Tiết', value: 'actions', sortable: false}
      ]
    }
  },
  computed: {
    ...mapGetters({
      listFoods: 'getListFoods'
    })
  },
  methods: {
    ...mapActions({
      getFoods: 'getListFoods'
    }),
    handleGetListFoods() {
      this.getFoods()
    },
    convetStatus(value){
      if (value === 1){
        return 'Còn món ăn'
      }else {
        return 'Hết món ăn'
      }
    },
    styleColorStatus(value){
      if (value === 1){
        return this.color = "color:blue"
      }else {
        return this.color = "color:red"
      }
    }
  },
  created() {
    this.handleGetListFoods()
  }

}
</script>

<style scoped>
#food {
  margin: 0 auto;
}
</style>