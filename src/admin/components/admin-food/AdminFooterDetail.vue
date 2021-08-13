<template>
  <v-container>
    <v-card>
      <v-card-title>
        Chi Tiết Món Ăn
      </v-card-title>
      <v-row>
        <v-col cols="3" sm="3">
          <v-card-title>
            <v-img :src="foodDetailByFoodId.foodImage" max-width="100%">
            </v-img>
          </v-card-title>
        </v-col>
        <v-col cols="9" sm="9">
          <v-row>
            <v-col cols="2" sm="2">
              <v-text-field label="Mã Món Ăn " v-bind:value="foodDetailByFoodId.foodId" readonly></v-text-field>
            </v-col>
            <v-col cols="2" sm="2">
              <v-text-field label="Tên Món Ăn" v-bind:value="foodDetailByFoodId.foodName" readonly></v-text-field>
            </v-col>
            <v-col cols="2" sm="2">
              <v-text-field label="Giá Tiền" v-bind:value="foodDetailByFoodId.foodPrice" readonly></v-text-field>
            </v-col>
            <v-col cols="2" sm="2">
              <v-text-field label="Số Lượng" v-bind:value="foodDetailByFoodId.quantity" readonly></v-text-field>
            </v-col>
            <v-col cols="2" sm="2">
              <v-text-field label="Trạng thái" v-bind:value="convetStatus(foodDetailByFoodId.status)" readonly></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">

              <v-textarea label="Mô Tả " v-bind:value="foodDetailByFoodId.describes" readonly></v-textarea>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-card-actions v-if="foodDetailByFoodId.status === 1">
          <v-btn color="error" class="ml-4"  @click="handleRemoveFood">
            <v-icon>
              mdi-delete
            </v-icon>
            XÓA
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn color="error" class="ml-4" disabled>
            <v-icon>
              mdi-delete
            </v-icon>
            XÓA
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mr-5">
          <router-link :to="{name:'foods'}">
            <v-btn color="primary" class="ml-4">
              <v-icon>
                mdi-arrow-left-thin-circle-outline
              </v-icon>
              QUAY LẠI
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "AdminFooterDetail",
  data() {
    return {
      foodId: this.$route.params.foodId
    }
  },
  computed: {
    ...mapGetters({
      foodDetailByFoodId: 'getFoodDetail'
    })
  },
  methods: {
    ...mapActions({
      findFoodDetails: 'getFoodDetail',
      removeFood:'removeFoodByFoodId'
    }),
    handleFindFoodDetailByBookingId() {
      this.findFoodDetails(this.foodId)
    },
    handleRemoveFood(){
      this.removeFood(this.foodId)

    },
    convetStatus(value){
      if (value === 1){
        return 'Còn món ăn'
      }else {
        return 'Hết món ăn'
      }
    }
  },
  created() {
    this.handleFindFoodDetailByBookingId()
  }
}
</script>

<style scoped>

</style>