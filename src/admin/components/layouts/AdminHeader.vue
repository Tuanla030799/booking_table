<template>
  <div class="app-bar">
    <v-app-bar color="transparent">
      <v-app-bar-title>Sunshine</v-app-bar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AdminHeader"
}
</script>

<style scoped>
.app-bar{
  position: absolute;
  left: 300px;
  right: 0;
  height: 48px;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #393838;
  border-left: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
}
</style>