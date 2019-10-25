<template>
  <div class="my">
    <div class="my-header">
      <div class="my-set clearfix">
        <van-icon name="comm iconfont icon-shezhi" @click="$router.push('/my-set')" />
        <van-icon name="comm iconfont icon-kefu-copy-copy" />
      </div>
      <div class="my-head clearfix">
        <van-image round width="1.4rem" height="1.4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="my-name">
          <div>
            <span>实名认证用户</span>
            <van-icon name="comm iconfont icon-renzheng" />
          </div>
          <div class="my-nicheng">昵称：ABC</div>
        </div>
      </div>
      <div class="my-wallet clearfix">
        <div @click="$router.push('/valued')">
          <span>5.00元</span>
          <p>钱包</p>
        </div>
        <b>|</b>
        <div @click="$router.push('/my-set')">
          <span>1张</span>
          <p>优惠券</p>
        </div>
      </div>
    </div>
    <div class="my-pinggu">
      <div class="my-serves clearfix">
        <div class="my-text">
          <van-cell title="环保达人" icon="comm iconfont icon-fuwuguwen" />
          <p>代理包月服务2019年1月1日-2019年2月1日</p>
        </div>
        <van-tag round type="warning">服务中</van-tag>
      </div>
      <div class="my-serves my-serves1 clearfix" @click="$router.push('/valued')">
        <div class="my-text">
          <van-cell title="我的估价" icon="comm iconfont icon-31aichegujia" />
          <p>苹果手机1部2019年2月1日提交</p>
        </div>
        <van-tag round type="warning">估价中</van-tag>
      </div>
      <div class="my-serves my-serves2 clearfix" @click="$router.push('/book')">
        <div class="my-text">
          <van-cell title="我的预约" icon="comm iconfont icon-reserve" />
          <p>上门处理预约2019年2月1日11：00上门</p>
        </div>
        <van-tag round type="warning">进行中</van-tag>
      </div>
    </div>
    <div class="my-tools">
      <van-cell-group>
        <van-cell title="招商合作" is-link icon="comm iconfont icon-RectangleCopy" />
        <van-cell title="设置" is-link icon="comm iconfont icon-shezhi1" />
        <van-cell title="安全与隐私" is-link icon="comm iconfont icon-icon-test" />
        <van-cell title="意见反馈" is-link icon="comm iconfont icon-Opinion" />
        <van-cell title="关于" is-link icon="comm iconfont icon-guanyu" />
      </van-cell-group>
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
  name: "my",
  data() {
    return {
      avtive: 3
    };
  }
};
</script>

<style lang="scss">
.my {
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  .clearfix {
    *zoom: 1;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    line-height: 0;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  .clear {
    clear: both;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .my-header {
    padding: 0.2rem 0.4rem 0.8rem;
    background: url("~@/assets/mybg.jpg") no-repeat top center #fff;
    border-bottom: 0.3rem solid #f1f1f1;
    background-size: 100% auto;
  }
  .my-set {
    line-height: 3vh;
    .van-icon {
      float: right;
      margin-left: 0.3rem;
      color: #fff;
      font-size: 0.48rem;
    }
  }
  .van-image--round {
    margin-right: 2vw;
    float: left;
  }
  // .my-head{height: 8vh;}
  .my-name {
    margin-top: 0.2rem;
    float: left;
    color: #fff;
    font-size: 0.34rem;
  }
  .icon-renzheng {
    color: #ffbf36;
    font-size: 0.44rem;
    margin-left: 0.2rem;
  }
  .my-nicheng {
    margin-top: 0.2rem;
  }
  .my-wallet {
    width: 100%;
    // height: 6vh;
    color: #fff;
    font-size: 0.34rem;
    font-weight: bold;
    text-align: center;
    margin-top: 0.2rem;

    b {
      float: left;
      width: 1%;
      margin-top: 0.4rem;
    }
    div {
      width: 49.5%;
      float: left;
    }
    span {
      font-size: 0.4rem;
    }
    p {
      margin: 0.05rem 0;
    }
  }
  .my-serves {
    background: #fff;
    border-radius: 0.2rem;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding-bottom: 0.2rem;
    box-shadow: 0 0 8px 1px #f1f1f1;
    margin-bottom: 0.4rem;

    .my-text {
      float: left;
      width: 79%;
    }
    p {
      color: #333;
      font-size: 0.34rem;
      margin: 0 0 0 0.2rem;
    }
    .van-tag--round {
      float: right;
      font-size: 0.34rem;
      margin-right: 0.2rem;
      margin-top: 0.4rem;
    }
    .van-cell {
      padding: 5px 10px;
      color: #000;
      font-weight: bold;
      background: none;
    }
    .van-cell:after {
      border-bottom: 0;
    }
  }
  // .my-serves1{
  //   background: linear-gradient(160deg, rgb(14, 202, 232) 20%,rgb(103, 216, 197) 80%);
  // }
  // .my-serves2{
  //   background: linear-gradient(160deg, rgb(255, 174, 78) 20%,rgb(255, 221, 79) 80%);
  // }
  .my-pinggu {
    padding: 0.4rem 0.4rem 0;
    margin-top: -1.2rem;
  }
  .my-tools {
    border-top: 0.2rem solid #f1f1f1;
    padding-bottom: 10vh;
  }
}
</style>
