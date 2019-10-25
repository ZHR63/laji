<template>
  <div class="reserve-clear">
    <van-nav-bar title="订单确认" left-arrow @click-left="$router.go(-1)" />

    <van-cell title="新增地址" icon="location-o" is-link></van-cell>
    <div class="clear-wrap">
      <van-cell title="单元格" value="内容" label="已选服务项目" />
    </div>

    <van-cell title="上门时间" icon="comm iconfont icon-shijian1" is-link></van-cell>
    <div style="height:10vh;"></div>
    <van-button type="primary" size="large">提交订单</van-button>
  </div>
</template>

<script>
export default {
  name: "reserve-clear",
  data() {
    return {
      value: 0
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.reserve-clear {
  width: 100vw;
  height: 100vh;

  .clear-wrap {
    .van-cell__label {
      position: absolute;
    }
  }
}
</style>
