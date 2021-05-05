<template>
    <div class="home">
    <the-header />
    <the-content />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "../../components/TheHeader.vue";
import TheContent from "../../components/TheContent.vue";
import TheFooter from "../../components/TheFooter.vue";
export default {
  name: "home",
  components: {
    TheHeader,
    TheContent,
    TheFooter,
  },
};
</script>

<style>
.home {
  width: 100%;
  /* height: 100vh; */
   background: #ececec; 
}
</style>