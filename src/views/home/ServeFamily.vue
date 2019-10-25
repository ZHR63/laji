<template>
  <div class="family">
    <van-nav-bar title="家庭垃圾代清理服务收费标准" left-arrow @click-left="$router.go(-1)" />

    <div class="family-basic">
      <van-button icon="comm iconfont icon-fuwu1" color="#109ef0" plain>基本服务</van-button>

      <div class="family-tips">
        <p>约定时间内上门收垃圾代清理，但约定时间以平台确定时间为准，请按时将垃圾放于预约位置。</p>
        <p style="color:#fe7329;">*拒收泡水垃圾。</p>
        <p>每次10kg以上另付费，另每5kg加10元。</p>
      </div>

      <van-radio-group v-model="baseSelect">
        <van-radio name="1" checked-color="#07c160">
          <div class="clearfix family-choose">
            <div class="family-choose-left">
              <p>单次</p>
              <p>下单1小时为上门代清</p>
            </div>
            <div class="family-choose-right">10元/次</div>
          </div>
        </van-radio>
        <van-radio name="2" checked-color="#07c160">
          <div class="clearfix family-choose">
            <div class="family-choose-left">
              <p>包月</p>
              <p>日均1.5元 超值服务自己省心</p>
            </div>
            <div class="family-choose-right">45元/月</div>
          </div>
        </van-radio>
        <van-radio name="3" checked-color="#07c160">
          <div class="clearfix family-choose">
            <div class="family-choose-left">
              <p>包年</p>
              <p>日均0.8元，赠送一次深度清洁</p>
            </div>
            <div class="family-choose-right">300元/年</div>
          </div>
        </van-radio>
      </van-radio-group>

      <van-button icon="comm iconfont icon-fuwuguanli" color="#7232dd" plain>增值服务</van-button>

      <van-radio-group v-model="addSelect">
        <van-radio name="1" checked-color="#07c160">
          <div class="clearfix family-choose">
            <div class="family-choose-left">
              <p>常规保洁</p>
              <p>扫地面，桌面，扔垃圾</p>
            </div>
            <div class="family-choose-right">1元/㎡</div>
          </div>
        </van-radio>
        <van-radio name="2" checked-color="#07c160">
          <div class="clearfix family-choose">
            <div class="family-choose-left">
              <p>深度清洁</p>
              <p>包家局家电</p>
            </div>
            <div class="family-choose-right">3元/㎡</div>
          </div>
        </van-radio>
        <van-radio name="3" checked-color="#07c160">
          <div class="clearfix family-choose">
            <div class="family-choose-left">
              <p>新者开花</p>
              <p>全包</p>
            </div>
            <div class="family-choose-right">3元/㎡</div>
          </div>
        </van-radio>
      </van-radio-group>
      <div style="height:10vh;"></div>
    </div>
    <van-submit-bar :price="1000" button-text="结算" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: "family",
  data() {
    return {
      baseSelect: "", //基础服务
      addSelect: "" //增值服务
    };
  },

  methods: {
    onSubmit() {
      this.$router.push('/reserve-clear')
    }
  },

  watch: {
    baseSelect(value) {

    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/global';
.family {
  width: 100vw;
  min-height: 100vh;
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

  .van-button--normal {
    display: block;
    margin: 0.5rem auto;
  }
  .family-tips {
    padding: 0.2rem;
    background: #fdfbf5;
    border-radius: 0.2rem;
    overflow: hidden;
    margin: 0 4vw 0.5rem;
    color: #333;
    font-size: 0.38rem;
  }

  .van-radio-group {
    margin: 0 4vw;
    border: 1px solid #f1f1f1;
    border-radius: 0.2rem;
    overflow: hidden;
  }
  .van-radio {
    border-bottom: 1px solid #f1f1f1;
    background: #fff;
    .van-radio__icon {
      margin-left: 3vw;
    }
  }

  .family-choose-left {
    float: left;
    width: 53vw;
    font-size: 0.4rem;
    color: #000;

    p {
      margin: 0.1rem 0;
    }
    p:nth-of-type(2) {
      color: #999;
      font-size: 0.34rem;
    }
  }

  .family-choose-right {
    float: right;
    width: 23vw;
    color: #f58332;
    font-size: 0.44rem;
    text-align: right;
    margin-top: 0.4rem;
    margin-right: 3vw;
  }
  .van-submit-bar {
    border-top: 1px solid #f1f1f1;

    .van-submit-bar__text {
      text-align: left;
      padding-left: 0.2rem;
    }
  }
}
</style>
