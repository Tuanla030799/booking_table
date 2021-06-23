<template>
  <v-container>
    <v-card max-width="900px">
      <v-row>
        <v-col cols="3" sm="3" class="pr-2">
          <v-img :src="saleDetail.saleImage" max-width="100px" max-height="100px">
          </v-img>
        </v-col>
        <v-col cols="9" sm="9">
          <v-row>
            <v-card-text>
              {{ saleDetail.saleDetail }}
            </v-card-text>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AdminSaleDetail",
  data() {
    return {
      saleId: this.$route.params.saleId
    }
  },
  methods: {
    ...mapActions({
      saleDetailForAdmin: 'getSaleDetailForAdmin'
    }),
    handleGetSaleDetailForAdmin() {
      this.saleDetailForAdmin(this.saleId)
    }
  },
  computed: {
    ...mapGetters({
      saleDetail: 'getSaleDetail'
    })
  },
  created() {
    this.handleGetSaleDetailForAdmin()
  }

}
</script>

<style scoped>
.v-responsive__content {
  margin: 5px;
}
</style>