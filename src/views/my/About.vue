<template>
  <div class="about">
    <van-nav-bar title="关于我们" left-arrow @click-left="$router.go(-1)" />

    <div class="about-content">
      <div class="about-img">
        <img src="@/assets/logo.png" alt="">
        <p>垃圾分类</p>
      </div>
      <van-cell title="联系我们" value="400 000 0000" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avtive: 2
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.about {
  width: 100vw;
  min-height: 100vh;
  background: #f3f4f7;

  .van-cell {
    margin-top: 0.5rem;
  }

  .about-img{
margin: 1rem auto;
text-align: center;
img{
  width: 30%;
}
p{
  font-size: 16px;
  color: #666;
  margin-top: 16px;
}
  }
.van-cell__value{
  color: #f00;
}
}
</style>