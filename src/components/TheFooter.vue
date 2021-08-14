<template>
  <div class="footer">
    <!-- <v-app id="inspire"> -->
    <v-footer padless>
      <v-card flat tile class="black--text text-center">
        <v-card-text >
          <a v-for="c in contact"
            :key="c.icon" :href="c.link" style="text-decoration: none;">
            <v-btn
            
            class="mx-4 black--text"
            icon
            active-class
          >
            <v-icon size="24px">
              {{ c.icon }}
            </v-icon>
            
          </v-btn>
          </a>
        </v-card-text>

        <v-card-text class="black--text pt-0">
          Booking Table là Mạng lưới nhà hàng NGON, uy tín và chất lượng. Giúp thực
          khách đặt bàn dễ dàng, được tặng kèm ưu đãi mà không cần mua Deal,
          Voucher. Giải pháp đột phá mới cho câu chuyện ăn gì, ở đâu! 
          <br>
          Phasellus
          feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
          cursus commodo interdum. Praesent ut risus eget metus luctus accumsan
          id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit
          amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia
          malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui
          sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut
          orci. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          {{ new Date().getFullYear() }} — <strong>Booking Table</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <!-- </v-app> -->
  </div>
</template>

<script>
export default {
  name: "the-footer",
  data() {
    return {
      contact: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/anhtuanlee.nightmares",
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/iamtuaans__/",
        },
      ],
    };
  },
};
</script>

<style>
.footer {
  position: relative;
  top: 20px;
  bottom: 0;
  left: 0%;
  width: 100%;
  /* height: 200px; */
  background: #ffffff;
}
</style>