<template>
  <div class="result">

    <van-nav-bar title="用过的避孕套" left-arrow @click-left="$router.go(-1)" />

    <div class="result-content">
      <div class="result-img"><img src="@/assets/ganlaji.png"/></div>

      <div class="result-news">
        <van-cell value="上门代扔垃圾服务！最低只需1元钱！" @click="$router.push('/serve')" />
        <van-cell value="亲，您的垃圾里有宝，快来估价吧！" @click="$router.push('/classify')"/>
        <van-cell title="有用的小知识当然要分享给好朋友">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <van-icon slot="right-icon"  name="comm iconfont icon-fenxiang" style="line-height: inherit;" />
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "result",
  data() {
    return {
      value: 0,
    };
  },

  methods: {
    
  }
};
</script>

<style lang="scss">
.result {
  width: 100vw;
  min-height: 100vh;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .result-content{
    margin: 1rem auto;

    .result-img{
      text-align: center;
      color: #f00;
      font-size: 0.44rem;
      font-weight: bold;

      img{width: 20vw;}
      .icon-weixian{
        font-size: 0.8rem;
      }
    }

    .result-news{
      padding: 0.3rem 0;
      width: 80vw;
      border-radius: 0.2rem;
      box-shadow: 0 0 8px 1px #ccc;
      margin: 1rem auto;
      overflow:hidden;
    }
    .result-title{
      font-size: 0.34rem;
      color: #333;
      padding: 1rem 0.2rem;
      text-align: center;
    }
  }
  
}
</style>
