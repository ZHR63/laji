<template>
  <div class="classify">
    <van-nav-bar title="全部分类" left-arrow @click-left="$router.go(-1)" />
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="电器用品" />
      <van-sidebar-item title="家具家电" />
      <van-sidebar-item title="箱包服饰" />
      <van-sidebar-item title="食品" />
      <van-sidebar-item title="图书" />
      <van-sidebar-item title="其他" />
    </van-sidebar>
    <div class="classify">
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <van-image src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/7912781bcb9bf7e0580dc78610616748_121_121.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ecmb.bdimg.com/tam-ogel/4409aa8aa057a032b726672e1f44be31_121_121.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/447480221f376151f576c2d9e738938c_fullsize.jpg@s_1,w_484,h_484" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2022339373,598390785&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=bcfc031f8d7824b0ec304e94e126f9c8" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2022339373,598390785&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=bcfc031f8d7824b0ec304e94e126f9c8" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/7912781bcb9bf7e0580dc78610616748_121_121.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ecmb.bdimg.com/tam-ogel/4409aa8aa057a032b726672e1f44be31_121_121.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/447480221f376151f576c2d9e738938c_fullsize.jpg@s_1,w_484,h_484" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "classify",
  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    
  }
};
</script>

<style lang="scss">
.classify {
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
  .van-sidebar{
    float: left;
  }
  .classify-left{
    float: left;
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
