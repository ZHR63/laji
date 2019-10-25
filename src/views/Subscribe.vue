<template>
  <div class="subscribe">
    <van-nav-bar title="预约" left-arrow @click-left="$router.go(-1)" />

    <div class="subscribe-content">
      <van-button type="primary" @click="$router.push('/serve')" class="btn-1" size="large">垃圾代清</van-button>
      <van-button type="primary" class="btn-2" size="large">旧物处理</van-button>
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
      avtive: 1
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.subscribe {
  width: 100vw;
  height: 100vh;

  .subscribe-content {
    padding: 1rem;
  }

  .btn-1 {
    background: #2ad4ad;
    margin-bottom: 1rem;
  }
  .btn-2 {
    background-color: #2a8fd4
  }
}
</style>