<template>
  <div class="possword">
    <van-nav-bar title="修改密码" left-arrow @click-left="$router.go(-1)" />

    <div class="main">
      <div class="possword-input">
        <van-field v-model="userPhone" clearable placeholder="请输入原密码" />
        <van-field v-model="userPhone" clearable placeholder="请输入新密码" />
        <van-field v-model="userPhone" clearable placeholder="请确认密码" />
      </div>
      <van-button :disabled="isDisabled" size="large" >确认</van-button>
    </div>
  </div>
</template>

<script>
import { phoneModel } from "@/utils";

export default {
  data() {
    return {
      userPhone: "",
      verify: "",
      isVerify: false, //是否可以点击验证
      isDisabled: true //是否可以登录
    };
  },

  methods: {
    //   点击登录
      onClickLogin() {
          this.$router.push('/')
      }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.possword {
  position: relative;
  width: 100vw;
  height: 100vh;
  font-size: 0.4rem;
  background: #fff;

  //返回图标
  

  .main {
    padding: 0.4rem;
.possword-img{
  width: 14vw;
  margin-bottom: 8px;
}
h3{
  text-align: center;
  margin-bottom: 40px;
}
    .van-cell {
      padding: 2vw 0vw;
      margin-top: 4vw;

    }
.van-cell:not(:last-child)::after{
  border-color: #ccc;
  left: 0;
}
    .possword-input {
      margin: {
        top: 0vw;
        bottom: 10vw;
      }
    }

    .possword-input-verify {
      color: #999;
    }

    .van-button {
      border-radius: 5vw;
      height: 1rem;
      line-height: 1rem;
      color: #fff;
      background: $theme-color;
      border: 0;
    }
  }
}
</style>