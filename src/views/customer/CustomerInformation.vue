<template>
  <div class="CustomerInformation">
    <div class="Information">
      <div class="infor-text">
        <router-link to="Home" style="text-decoration: none">
          <span class="text-home">Trang chủ</span>
        </router-link>
        <span> > </span>
        <span style="color: red">Thông tin tài khoản</span>
      </div>
      <div class="cInfor">
        <div class="cInfor-left">
          <div class="cInfor1">
            <div class="cInfor-avatar">
              <div class="avatar-infor">
                <v-avatar color="#ccc" size="100">
                  <img v-if="url" :src="url" />
                </v-avatar>
              </div>
              <!-- <button type="file" class="btn-default" @change="onFileChange">Chọn ảnh</button> -->
              <label>
                  <input type="file" @change="onFileChange" />
                  "chọn ảnh"
              </label>
            </div>
            <div class="infor-notfix"></div>
          </div>
          <div class="cInfor2">Thông tin tài khoản</div>
          <div class="cInfor2">Quản lí mật khẩu</div>
          <div class="cInfor2">Lịch sử đặt chỗ</div>
          <div class="cInfor2">Thoát</div>
        </div>
        <div class="cInfor-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-information",
  data() {
    return {
      url: null,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      console.log("D:/HocTap/" + file.name);
    },
  },
};
</script>

<style scoped>
.CustomerInformation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}
.Information {
  width: 80%;
  margin: 20px 10%;
  height: 620px;
  padding: 20px 50px;
  background: #ffffff;
}
.infor-text {
  width: 100%;
  padding: 5px;
  /* border: 1px solid #ccc; */
}
.infor-text .text-home {
  color: #555555;
  cursor: pointer;
}
.infor-text .text-home:hover {
  color: red;
}
.cInfor {
  display: flex;
  margin-top: 5px;
  width: 100%;
  height: 92%;
  /* border: 1px solid #ccc; */
}
.cInfor-left {
  width: 33%;
  height: 382px;

  border: 1px solid #ccc;
}
.cInfor-left .cInfor1 {
  width: 100%;
  height: 180px;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.cInfor-avatar {
  width: 126px;
  height: 159px;
  /* border: 1px solid #ccc ; */
}
.avatar-infor {
  width: 125px;
  height: 125px;
  padding: 10px;
  /*     */
}
.btn-default {
  height: 32px !important;
  line-height: 32px !important;
  border-radius: 10px !important;
  padding: 0 15px !important;
  background: #3d7ff8;
  margin-left: 18px;
}
.infor-notfix {
  width: 250px;
  height: 156px;
  border: 1px solid #ccc;
}

.cInfor-left .cInfor2 {
  width: 100%;
  height: 50.5px;
  align-items: center;
  padding-top: 12px;
  padding: 14px;
  border-bottom: 1px solid #ccc;
}
.cInfor-right {
  margin-left: 1%;
  width: 66%;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
}
</style>