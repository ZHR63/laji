<template>
  <div class="service">
    <van-nav-bar title="客服留言" left-arrow @click-left="$router.go(-1)" />

    <div class="service-content">
      <p>请填写以下内容方便我们联系您</p>

      <van-field v-model="userName" placeholder="姓名" />
      <van-field v-model="userPhone" placeholder="联系方式" />
      <van-field
        v-model="userMessage"
        rows="4"
        autosize
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        show-word-limit
      />

      <van-uploader v-model="fileList" multiple />

      <van-button size="large">留言</van-button>
      <span class="service-center">客服专员会在12小时内与你取得联系</span>

      <p class="way">其他方式</p>
      <div class="service-way">
        <p style="display: flex; align-items: center;">
          企业微信
          <van-image
            width="8vw"
            height="8vw"
            style="margin-left: 2vw;"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </p>
        <p>企业QQ: 634480610</p>
      </div>
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
      avtive: 2,
      userName: "", // 姓名
      userPhone: "", //手机号
      userMessage: "", //留言
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // // Uploader 根据文件后缀来判断是否为图片文件
        // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true }
      ]
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

  .van-uploader {
    margin: 0.5rem 0;
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

  .way {
    margin: 0.3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $theme-color;
    font-size: 0.36rem;
  }

  .way::after,
  .way::before {
    content: "";
    display: inline-block;
    width: 0.8rem;
    height: 0;
    margin: 0 0.2rem;
    border-top: 0.3vw solid $theme-color;
  }

  .service-way {
    margin-bottom: 0.5rem;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>