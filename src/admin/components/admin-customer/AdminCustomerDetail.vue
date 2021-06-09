<template>
  <div>
    <h1>Day la customer detail</h1>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AdminCustomerDetail",
  data() {
    return {
      email: this.$route.params.email
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route'(to, from) {
      this.email = to.params.email
      this.fetchCustomerDetail()
    }
  },
  methods: {
    ...mapActions(
        {
          getCustomerDetail: 'getCustomerDetail'
        }
    ),
    fetchCustomerDetail() {
      this.getCustomerDetail(this.email)
    }
  },
  computed: {
    ...mapGetters({
      customerDetail: 'getCustomerDetail'
    })
  },
  created() {
    this.fetchCustomerDetail()
  }
}
</script>

<style scoped>

</style>