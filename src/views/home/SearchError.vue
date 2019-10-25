<template>
  <div class="found">

    <van-nav-bar title="泡过屎的木屑" left-arrow @click-left="$router.go(-1)" />
    <div class="found-content">
      <div class="found-img">前方<van-icon name="comm iconfont icon-weixian" style="line-height: inherit;" />高能</div>
      <div class="found-news">
        <div class="found-title">亲，您的问题太复杂，请咨询 <van-tag round type="warning" @click="$router.push('/service')">客服</van-tag></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "found",
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
.found {
  width: 100vw;
  min-height: 100vh;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .found-content{
    margin: 1rem auto;

    .found-img{
      text-align: center;
      color: #f00;
      font-size: 0.44rem;
      font-weight: bold;

      img{width: 20vw;}
      .icon-weixian{
        font-size: 0.8rem;
      }
    }

    .found-news{
      padding: 0.3rem 0;
      width: 80vw;
      border-radius: 0.2rem;
      box-shadow: 0 0 8px 1px #ccc;
      margin: 1rem auto;
      overflow:hidden;
    }
    .found-title{
      font-size: 0.34rem;
      color: #333;
      padding: 1rem 0.2rem;
      text-align: center;
    }
  }
  
}
</style>
