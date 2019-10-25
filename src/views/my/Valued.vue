<template>
  <div class="valued">
    <van-nav-bar title="估价中" left-arrow @click-left="$router.go(-1)" />
    <div class="valued-current">
      <van-circle v-model="currentRate" :rate="80" :stroke-width="60" text="估价中" />
      <p>请在我的-估价中注意查收</p>
    </div>

    <div class="valued-ad">
      <img src="@/assets/banner1.png" />
    </div>
    
  </div>
</template>

<script>
export default {
  name: "valued",
  data() {
    return {
      value: 0,
      currentRate: 0
    };
  },

  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onSubmit(){}
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  }
};
</script>

<style lang="scss">
.valued {
  width: 100vw;
  min-height: 100vh;
  background: #f9f9f9;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .valued-current{
    margin: 1rem 0;
    text-align: center;
    font-size: 0.34rem;
  }
  .valued-ad{

     img{width: 100%;}
  }
}
</style>
