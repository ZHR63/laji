<template>
  <div class="order">
    <van-nav-bar title="订单确认" left-arrow @click-left="$router.go(-1)" />
    <van-cell title="山东省济南市" icon="location-o" is-link></van-cell>
    <van-cell-group>
      <van-cell title="已选服务项目" label="*家庭垃圾代清理包月服务" value="45元" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="预约上门时间" is-link label="*非年次服务用户请与客服预约时间" />
    </van-cell-group>
    <van-submit-bar :price="1000" button-text="支付" @submit="onSubmit"/>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      value: 0,
    };
  },

  methods: {
    onSubmit(){}
  }
};
</script>

<style lang="scss">
.order {
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
  .van-submit-bar{
    border-top:1px solid #f1f1f1;

    .van-submit-bar__text{
      text-align: left;
      padding-left: 0.2rem;
    }
  }

}
</style>
