<template>
  <div class="register">
    <van-icon name="arrow-left" @click="$router.go(-1)" />

    <div class="main">
      <h3>注册账号</h3>
      <div class="register-input">
        <van-field v-model="userPhone" clearable placeholder="请输入用手机号" />
        <van-field v-model="verify" clearable placeholder="请输入验证码">
          <span v-if="!isVerify" slot="button" class="register-input-verify">获取验证码</span>
          <span v-else slot="button" @click="onClickVerify">获取验证码</span>
        </van-field>
        <van-field v-model="userPhone" clearable placeholder="请输入密码" />
      </div>
      <van-button :disabled="isDisabled" size="large">注册</van-button>
    </div>
  </div>
</template>

<script>
import { phoneModel } from "@/utils";

export default {
  data() {
    return {
      userPhone: "", // 用户姓名
      userPassword: "", //用户密码
      verify: "", //验证码
      isVerify: false, //是否可以点击验证
      isDisabled: true //是否可以登录
    };
  },

  methods: {
    //   点击登录
    onClickLogin() {
      this.$router.push("/");
    },

    // 点击获取验证码
    onClickVerify() {
      
    }
  },

  watch: {
    // 手机号时自动添加空格
    userPhone(value) {
      this.userPhone = phoneModel(value.toString());
      if (value.length == 13) {
        this.isVerify = true;
      } else {
        this.isVerify = false;
      }
    },

    // 验证是否有验证码
    verify(value) {
      if (value.length > 3) {
        this.isDisabled = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.register {
  position: relative;
  width: 100vw;
  height: 100vh;
  font-size: 0.4rem;
  background: #fff;

  //返回图标
  .van-icon {
    position: absolute;
    top: 6vw;
    left: 5vw;
  }

  .main {
    padding: 15vw 10vw;
    .register-img {
      width: 14vw;
      margin-bottom: 8px;
    }
    h3 {
      text-align: center;
      margin-bottom: 40px;
    }
    .van-cell {
      padding: 2vw 0vw;
      margin-top: 4vw;
    }
    .van-cell:not(:last-child)::after {
      border-color: #ccc;
      left: 0;
    }
    .register-input {
      margin: {
        top: 5vw;
        bottom: 10vw;
      }
    }

    .register-input-verify {
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