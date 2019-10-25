<template>
  <div class="reserve-clear">
    <van-nav-bar title="订单确认" left-arrow @click-left="$router.go(-1)" />
    <div class="clear-wrap">
      <van-cell title="已选服务项目" />
      <van-cell title="服务项目内容" value="45" />
    </div>

    <van-cell title="上门时间" :value="timeContent" @click="timeShow=true" is-link></van-cell>
    <br />
    <br />
    <van-button type="primary" size="large">提交订单</van-button>

    <!-- 时间弹出框 -->
    <van-popup v-model="timeShow" position="bottom" :style="{ height: '50%' }">
      <van-datetime-picker
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onClickConfirm"
        @cancel="onClickCancel"
        :filter="filter"
      />
    </van-popup>
  </div>
</template>

<script>
import { formatDateTime } from "@/utils";

export default {
  name: "reserve-clear",
  data() {
    return {
      timeShow: false,
      timeContent: "", // 时间内容
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1)
    };
  },

  methods: {
    filter(type, options) {
      if (type === "minute") {
        return options.filter(option => option % 15 === 0);
      }
      return options;
    },

    // 点击确定
    onClickConfirm(value) {
      this.timeContent = formatDateTime(value);
    },

    // 点击取消
    onClickCancel() {
      this.timeShow = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.reserve-clear {
  width: 100vw;
  height: 100vh;

  .van-cell__label {
    width: 80vw;
  }

  .clear-wrap {
    .van-cell {
      padding-bottom: 0;
    }
    .van-cell:not(:last-child)::after {
      border: none;
    }
  }
}
</style>
