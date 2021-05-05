<template>
  <div class="content">
    <!-- <h1>content</h1> -->

    <v-container>
      <div class="header-title">
        <div class="title">Bộ Sưu Tập</div>
        <div class="title-text">
          Booking Table là web đặt bàn uy tín chất lượng với nhiều ưu đãi hấp
          dẫn.
        </div>
      </div>
      <v-layout row wrap>
        <v-col xs12 sm6 md4 lg3 v-for="(foot, index) in listFoots" :key="index">
          <v-card flat class="text-xs-center ma-1 fluid">
            <v-img max-width="264px" height="288px">
              <a href="">
                <img :src="foot.img" alt="" />
              </a>
            </v-img>
            <v-card-text>
              <div class="title">
                <a href="#" class="text-decoration-none">{{ foot.title }}</a>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "the-content",
  data() {
    return {
      listFoots: [
        {
          title: "ăn sập hà nội thì đi đâu?",
          img:
            "https://pasgo.vn/Upload/anh-bo-suu-tap/nha-hang-dat-tiec-10-3-o-ha-noi-300-169355280fd7fbb8-b589-4743-876c-2cc27f4e4c71.jpg",
        },
        {
          title: "sushi nhật bản món ăn giành cho giới thượng lưu?",
          img:
            "https://pasgo.vn/Upload/anh-bo-suu-tap/nha-hang-dat-tiec-10-3-o-ha-noi-300-169355280fd7fbb8-b589-4743-876c-2cc27f4e4c71.jpg",
        },
        {
          title: "thịt chó chấm mắm tôm, món ăn dân dã làng quê việt",
          img: "/Capture.PNG",
        },
        {
          title: "ăn sập hà nội thì đi đâu?",
          img:
            "https://pasgo.vn/Upload/anh-bo-suu-tap/nha-hang-dat-tiec-10-3-o-ha-noi-300-169355280fd7fbb8-b589-4743-876c-2cc27f4e4c71.jpg",
        },
        {
          title: "ăn sập hà nội thì đi đâu?",
          img:
            "https://pasgo.vn/Upload/anh-bo-suu-tap/nha-hang-dat-tiec-10-3-o-ha-noi-300-169355280fd7fbb8-b589-4743-876c-2cc27f4e4c71.jpg",
        },
        {
          title: "sushi nhật bản món ăn giành cho giới thượng lưu?",
          img:
            "https://pasgo.vn/Upload/anh-bo-suu-tap/nha-hang-dat-tiec-10-3-o-ha-noi-300-169355280fd7fbb8-b589-4743-876c-2cc27f4e4c71.jpg",
        },
        {
          title: "sushi nhật bản món ăn giành cho giới thượng lưu?",
          img:
            "https://pasgo.vn/Upload/anh-bo-suu-tap/nha-hang-dat-tiec-10-3-o-ha-noi-300-169355280fd7fbb8-b589-4743-876c-2cc27f4e4c71.jpg",
        },
        {
          title: "thịt chó chấm mắm tôm, món ăn dân dã làng quê việt",
          img:
            "https://pasgo.vn/Upload/anh-bo-suu-tap/nha-hang-dat-tiec-10-3-o-ha-noi-300-169355280fd7fbb8-b589-4743-876c-2cc27f4e4c71.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.content {
  position: relative;
  top: 15px;
  left: 10%;
  width: 80%;
  background: #ffffff;
  margin-bottom: 10px;
  /* max-height: 1000px; */
}

@media only screen and (max-width: 1200px) {
  /* For mobile phones: */

  .content {
    left: 1%;
  }
  .content {
    right: 1%;
  }
  .content {
    width: 98%;
  }
}

.header-title {
  display: flex;
  align-items: center;
  padding: 10px;
}

.header-title .title {
  padding-right: 5px;
  /* border-right: 3px solid #333333; */
}
.header-title .title-text {
  padding-left: 10px;
  color: red;
  border-left: 2px solid #555555;
}
</style>