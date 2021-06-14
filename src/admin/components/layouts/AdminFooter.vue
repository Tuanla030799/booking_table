<template>
  <v-footer
      class="admin-footer"
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="blue accent-3 align-center">
        <strong class="subheading">Hỗ trợ khách hàng 24/7</strong>
        <v-spacer></v-spacer>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>NHÀ HÀNG SUNSHINE</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AdminFooter",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  })
}
</script>

<style scoped>
.admin-footer{
  position: fixed;
  width: 100%;
}
</style>