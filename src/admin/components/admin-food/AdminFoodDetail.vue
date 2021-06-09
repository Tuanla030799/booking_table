<template>
  <div>
    <h1>Day la food detail</h1>
    <h1>{{foodDetail.foodName }}</h1>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AdminFoodDetail",
  data() {
    return {
      foodId: this.$route.params.foodId,
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route'(to, from) {
      this.foodId = to.params.foodId
      this.fetchDateFoodDetail()
    }
  },
  methods: {
    ...mapActions({
      getFoodDetail: 'getFoodDetail'
    }),
    fetchDateFoodDetail() {
      this.getFoodDetail(this.foodId)
    }
  },
  computed: {
    ...mapGetters({
      foodDetail: 'getFoodDetail'
    })
  },
  created() {
    this.fetchDateFoodDetail()
  }
}
</script>

<style scoped>

</style>