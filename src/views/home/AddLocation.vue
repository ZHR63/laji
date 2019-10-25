<template>
  <div class="add-location">
    <van-nav-bar title="添加地址" left-arrow @click-left="$router.go(-1)" />

    <section>
      <van-field label="联系人" v-model="userName" placeholder="联系人" />
      <van-field label="电话" v-model="userPhone" placeholder="手机号码" />
      <van-field label="地址" v-model="userCity" placeholder="选择省/市/区" right-icon="arrow" />
      <van-field label="详细信息" v-model="userInfo" placeholder="10号楼五层501室" />
    </section>

    <!-- 省市区弹出框 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-area :area-list="areaList" @confirm="confirm" @cancel="show = false" />
    </van-popup>

    <br />
    <div class="add-location-btn">
      <van-button type="primary" size="large">确定</van-button>
    </div>
  </div>
</template>

<script>
import areaList from "@/utils/area";
export default {
  data() {
    return {
      show: false,
      areaList: {},
      userName: "", // 联系人
      userPhone: "", // 手机号码
      userCity: "", // 省市区
      userInfo: "" // 详细信息
    };
  },

  mounted() {
    this.areaList = areaList;
  },

  methods: {
    confirm(value, b) {
      for (let i of value) {
        this.userCity += i.name + ' ';
      }
      this.show = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.add-location {
  width: 100vw;
  height: 100vh;

  .van-field__label {
    font-weight: 600;
  }

  .van-cell {
    padding: 0.4rem;
  }

  .add-location-btn {
    padding: 0.4rem;
  }
}
</style>