<template>
  <div class="enterprise">
    <van-nav-bar title="企业垃圾代清理服务收费标准" left-arrow @click-left="$router.go(-1)" />

    <div class="enterprise-basic">
      <van-button icon="comm iconfont icon-fuwu1" color="#109ef0" plain>基本服务</van-button>

      <div class="enterprise-tips">
        <p>按约定时间、次数对企业进行服务。</p>
        <p style="color:#fe7329;">*不接受工业企业订单。</p>
      </div>

      <van-button icon="comm iconfont icon-fuwuguanli" color="#7232dd" plain>增值服务</van-button>
      <van-grid :column-num="3">
        <van-grid-item icon="comm iconfont icon-hua" text="新样开花" />
        <van-grid-item icon="comm iconfont icon-qingjie" text="深度清洁" />
        <van-grid-item icon="comm iconfont icon-gerendingzhi" text="定制服务" />
      </van-grid>

      <div class="enterprise-tips">
        <p style="text-align: center;font-weight: bold;font-size: 0.4rem;color: #000;">注明：</p>
        <p>企业用户请进行客服询价</p>
        <p>须企业合约完成下单</p>
      </div>
      <div style="height:10vh;"></div>
    </div>
    <van-button type="primary" size="large">客服询价</van-button>
  </div>
</template>

<script>
export default {
  name: "enterprise",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
.enterprise {
  width: 100vw;
  min-height: 100vh;
  .clearfix { *zoom: 1;}
  .clearfix:before,
  .clearfix:after { display: table; line-height: 0; content: "";}
  .clearfix:after {clear: both;}
  .clear{clear: both;}
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  
  .van-button--normal{
    display: block;
    margin: 0.5rem auto;
  }
  .enterprise-tips{
    padding: 0.2rem;
    background: #fdfbf5;
    border-radius: 0.2rem;
    overflow: hidden;
    margin: 0 4vw 0.5rem;
    color: #333;
    font-size: 0.38rem;
  }
  .van-radio-group{
    margin: 0 4vw;
    border:1px solid #f1f1f1;
    border-radius: 0.2rem;
  }
  .van-radio{border-bottom:1px solid #f1f1f1;
  .van-radio__icon{margin-left: 3vw;}
  }
  .van-grid{
      margin: 2vw 4vw;
  }
  .van-submit-bar{
    border-top:1px solid #f1f1f1;

    .van-submit-bar__text{
      text-align: left;
      padding-left: 0.2rem;
    }
  }
  .van-button--primary{
    position: fixed;
    bottom: 0;
    border-radius:0;
    
  }
}
</style>
