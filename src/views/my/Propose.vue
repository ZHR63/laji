<template>
  <div class="service">
    <van-nav-bar title="意见反馈" left-arrow @click-left="$router.go(-1)" />

    <div class="service-content">
      <p>请填写您宝贵的意见</p>
      <van-field
        v-model="userMessage"
        rows="4"
        autosize
        type="textarea"
        placeholder="请输入您的意见与建议"
        show-word-limit
      />

      <van-button size="large">提交</van-button>
    </div>

    <van-tabbar v-model="avtive" active-color="#4ccbd4">
      <van-tabbar-item icon="comm iconfont icon-shouye" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="comm iconfont icon-pre_icon_yuyuequxian" to="/subscribe">预约</van-tabbar-item>
      <van-tabbar-item icon="comm iconfont icon-kefu" to="/service">客服</van-tabbar-item>
      <van-tabbar-item icon="comm iconfont icon-wode1" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avtive: 2
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.service {
  width: 100vw;
  min-height: 100vh;

  .van-cell {
    margin-top: 0.5rem;
  }

  .service-content {
    padding: 0.4rem;
    margin-bottom: 1rem;
  }

  .service-center {
    width: 100%;
    display: inline-block;
    text-align: center;
    color: #666;
    font-size: 0.32rem;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }
.van-button{
  margin-top: 24px;
}
}
</style>