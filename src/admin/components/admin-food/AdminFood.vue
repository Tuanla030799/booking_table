<template>
  <v-container id="food" fluid class="my-5">
    <v-card class="food-page" elevation="10">
      <v-card-title>
        DANH SÁCH MÓN ĂN
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="listFoods"
      >
        <template v-slot:body="{items}">
          <tbody>
          <tr v-for="item in items" :key="item.foodId">
            <td>{{ item.foodId }}</td>
            <td>{{ item.foodName }}</td>
            <td>{{ item.foodPrice }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.describes }}</td>
            <td>
              <v-btn
                  color="info"
              >
                <v-icon dark>
                  mdi-clipboard-edit-outline
                </v-icon>
              </v-btn>
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