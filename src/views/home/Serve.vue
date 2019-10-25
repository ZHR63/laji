<template>
  <div class="serve">
    <div class="serve-add">
      <div class="serve-add-in">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-location" />
        </svg>
        山东省烟台市芝罘区大海阳15号
      </div>
    </div>

    <div class="van-image">
      <img src="@/assets/ad11.png" class="van-image__img" style="object-fit: contain;">
    </div>

    <div class="serve-location">
      <div class="serve-current clearfix">
        <van-icon name="comm iconfont  icon-dizhi" />
        <van-cell-group>
          <van-cell title="当前城市" label="济南" />
        </van-cell-group>
        <van-icon name="arrow" />
        
      </div>
      <div class="serve-fenlei">
        <van-row gutter="20">
          <van-col span="12"  @click="$router.push('/serve-family')"><img src="@/assets/jtlaji.png" /></van-col>
          <van-col span="12"  @click="$router.push('/serve-enterprise')"><img src="@/assets/qylaji.png" /></van-col>
        </van-row>
      </div>
    </div>
    
    <van-cell title="商务合作" icon="comm iconfont icon-huabanfuben3" />
    <div class="serve-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/banner1.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/banner2.png" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-button color="#7232dd" @click="$router.push('/')" plain>查看详情 进入合作</van-button>
      
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
  name: "serve",
  data() {
    return {
      avtive: 0,
      images: '~@/assets/ad.png'
    };
  },

  methods: {
   sdfsadf() {},
   onSearch() {}
  }
};
</script>

<style lang="scss">
.serve {
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

  .serve-add {
    padding: 2vw 4vw 0;
    color: #333;
    font-size: 0.34rem;

    .serve-add-in {
      height: 4vh;
      line-height: 4vh;
      border-radius: 0.8rem;
      background: #f9f9f9;
      border: 1px solid #ccc;

      .icon {
        margin-left: 0.2rem;
      }
    }
  }
.van-image{
      margin: 1vh 4vw 0;
    }
  .serve-location{
    background: #f8f8f8;
    padding: 2vw 4vw;
  }
  .serve-current{
    background: #fff;
    border-radius: 10rem;
    overflow: hidden;

    .icon-dizhi{
      float: left;
      width: 10vw;
      color: rgb(5, 214, 221);
      font-size: 0.8rem;
      line-height: 1.6rem;
      margin-left: 4vw;
    }
    .van-cell-group{
      float: left;
      width: 70vw;
      margin-top: 0.2rem;
    }
    .van-cell__label{margin-top: 0;}
    .van-icon-arrow{
      float: left;
      width: 2vw;
      font-size: 0.48rem;
      color: #999;
      line-height: 1.6rem;
    }
    .van-cell{padding: 0;}
    [class*=van-hairline]::after{border: 0;}
  }
.serve-fenlei{
  margin-top: 2vw;
    text-align: center;

    img{
      width: 100%;
    }
  }


  .serve-swipe {
    margin: 3vw 4vw;
    border-radius: 0.1rem;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
  }
  
  .van-cell{
      color: #333;
      font-weight: bold;
    }
    .van-cell__left-icon{
      color: #4ccbd4;
    }
  .van-button--normal{
    display: block;
    margin: 0.5rem auto 10vh;
  }
  .van-button{
    border-radius: 0.1rem;
  }

  .van-tabbar-item--active{color:#4ccbd4;font-weight: bold}
}
</style>
