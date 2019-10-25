<template>
  <div class="home">
    <div id="container"></div>
    <div class="home-location" @click="$router.push('/select-location')">
      <van-icon name="location" />
      <p class="van-ellipsis home-location-text">{{homeLocation}}</p>
      <div class="home-location-triangle"></div>
    </div>

    <div class="home-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/banner1.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/banner2.png" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="home-row">
      <van-row>
        <van-col span="6" @click="$router.push('/classify')">
          <img src="@/assets/main1.png" />
          <p>垃圾分类</p>
        </van-col>
        <van-col span="6">
          <!-- <img src="@/assets/main2.png" @click="$router.push('/reserve-clear')" /> -->
          <img src="@/assets/main2.png" @click="$router.push('/serve-family')" />
          <p>预约清理</p>
        </van-col>
        <van-col span="6" @click="$router.push('/estimate')">
          <img src="@/assets/main3.png" />
          <p>旧物估价</p>
        </van-col>
        <van-col span="6" @click="$router.push('/old-dispose')">
          <img src="@/assets/main4.png" />
          <p>旧物处理</p>
        </van-col>
      </van-row>
    </div>
    <div class="home-fenlei">
      <van-row>
        <van-col span="12">
          <img src="@/assets/ad1.png" />
        </van-col>
        <van-col span="12">
          <img src="@/assets/ad2.png" />
        </van-col>
        <van-col span="12">
          <img src="@/assets/ad3.png" />
        </van-col>
        <van-col span="12">
          <img src="@/assets/ad4.png" />
        </van-col>
      </van-row>
    </div>
    <div class="home-fenge">
      <img src="@/assets/ad.png" />
    </div>

    <div class="home-tuijian">
      <van-cell title="环保达人" icon="comm iconfont icon-dthb" />
      <ul class="home-daren">
        <li>
          <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="home-drright">
            <div class="home-up">
              <div class="home-name">李大仁</div>
              <div class="home-time">10分钟前预约平台服务</div>
            </div>
            <div class="home-text">成功将垃圾处理成功并变现200元</div>
          </div>
        </li>
        <li>
          <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="home-drright">
            <div class="home-up">
              <div class="home-name">李大仁</div>
              <div class="home-time">10分钟前预约平台服务</div>
            </div>
            <div class="home-text">成功将垃圾处理成功并变现200元</div>
          </div>
        </li>
      </ul>
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
  name: "home",
  data() {
    return {
      avtive: 0,
      homeLocation: "正在定位..."
    };
  },

  mounted() {
    const THAT = this;
    var map = new AMap.Map("container", {
      resizeEnable: true
    });
    AMap.plugin("AMap.Geolocation", function() {
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 20000 //超过10秒后停止定位，默认：5s
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition(function(status, result) {
        if (status == "complete") {
          onComplete(result);
        } else {
          onError(result);
        }
      });
    });

    //解析定位结果
    function onComplete(data) {
      console.log(data);
      THAT.homeLocation = data.formattedAddress;
    }
    //解析定位错误信息
    function onError(data) {
      THAT.homeLocation = "未能获取地址";
    }
  },

  methods: {}
};
</script>

<style lang="scss">
@import "@/assets/scss/global";

.home {
  width: 100vw;
  min-height: 100vh;

  .home-location {
    padding: 0.4rem;
    display: flex;
    align-items: center;
    background: $theme-color;
    color: #fff;

    .home-location-text {
      max-width: 70vw;
    }

    .home-location-triangle {
      width: 0;
      height: 0;
      border-top: 0.1rem solid #fff;
      border-right: 0.1rem solid transparent;
      border-bottom: 0 solid transparent;
      border-left: 0.1rem solid transparent;
    }
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .home-swipe {
    margin: 3vw 4vw;
    border-radius: 0.3rem;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
  }

  .home-row {
    background: #fff;
    padding: 0.3rem 0;
    text-align: center;

    img {
      width: 40%;
    }
    p {
      font-size: 0.34rem;
      margin: 0.1rem 0;
    }
  }
  .home-fenlei {
    text-align: center;
    padding: 3vw 3vw 0;
    background: #f8f8f8;

    img {
      width: 95%;
    }
  }
  .home-fenge {
    padding: 3vw 4vw;
    background: #f8f8f8;
    img {
      display: block;
      margin: 0;
      width: 100%;
    }
  }

  .home-tuijian {
    padding-bottom: 10vh;
    background: #fff;

    .van-cell {
      color: #000;
      font-weight: bold;
      font-size: 0.4rem;
      .van-cell__left-icon {
        color: #4ccbd4;
      }
    }
    .home-daren {
      li {
        margin: 2vw 4vw;
        padding: 0.2rem;
        border-radius: 0.2rem;
        box-shadow: 0 0 8px 0 #eee;
        height: 2rem;
      }
      .van-image--round {
        float: left;
      }

      .home-drright {
        margin-left: 2vw;
        float: left;
        color: #333;
        width: 65vw;
        font-size: 0.34rem;
      }
      .home-up {
        height: 0.8rem;
        line-height: 0.8rem;
        width: 100%;
        margin-top: 0.2rem;
      }
      .home-name {
        color: #019ea9;
        float: left;
      }
      .home-time {
        color: #666;
        float: right;
      }
      .home-text {
        line-height: 1rem;
      }
    }
  }
}
</style>
