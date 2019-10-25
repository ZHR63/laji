<template>
  <div class="select-location">
    <van-nav-bar
      title="选择地址"
      right-text="新增地址"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="$router.push('/add-location')"
    />

    <section>
      <h4>当前地址</h4>
      <div class="section-1">
        <span class="van-ellipsis">烟台斯维登服务公寓(高铁南站红星美凯龙)</span>
        <span class="section-1-anew" @click="isAnimation = true">
          <van-icon name="aim" :class="{'animation-active': isAnimation}" />
          <span>重新定位</span>
        </span>
      </div>
    </section>

    <section>
      <h4>服务地址</h4>
      <div class="section-2">
        <p>
          <span class="section-2-name">姓名</span>
          <span class="section-2-sex">男士</span>
          <span class="section-2-phone">17863005036</span>
        </p>
        <p class="section-2-text">烟台斯维登服务公寓(高铁南站红星美凯龙)</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAnimation: false
    };
  },

  methods: {},
  watch: {
    isAnimation(value) {
      setTimeout(() => {
        this.isAnimation = false;
      }, 3000);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.select-location {
  width: 100vw;
  height: 100vh;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  h4 {
    padding: 4vw 0 1.866667vw 4vw;
    color: #666;
    font-size: 0.33rem;
    font-weight: 400;
  }

  .section-1 {
    padding: 0.4rem;
    background: #fff;
    display: flex;
    justify-content: space-between;

    span:first-child {
      width: 66vw;
      font-weight: 600;
    }

    .section-1-anew {
      display: flex;
      align-items: center;
      color: $theme-color;
      font-size: 0.38rem;
    }

    .van-icon-aim {
      margin-right: 1vw;
    }

    .animation-active {
      animation: spin 1s linear infinite;
    }
  }

  .section-2 {
    padding: 0.4rem;
    background: #fff;
    font-size: 0.3rem;
    color: #666;

    .section-2-name {
      color: #333;
      font-size: 0.45rem;
      font-weight: 600;
    }

    .section-2-sex {
      margin: 0 0.1rem;
    }

    .section-2-text {
      color: #333;
      margin-top: 0.1rem;
    }
  }
}
</style>