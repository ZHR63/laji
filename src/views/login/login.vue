<template>
  <div class="login">
    <van-nav-bar
      right-text="注册"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="$router.push('/register')"
    />

    <div class="main">
      <h2>Hi 欢迎登录垃圾分类</h2>
      <div class="login-input">
        <van-field v-model="userPhone" clearable placeholder="请输入用手机号" />
        <van-field v-model="verify" clearable placeholder="请输入验证码">
          <span v-if="!isVerify" slot="button" class="login-input-verify">获取验证码</span>
          <span v-else slot="button">获取验证码</span>
        </van-field>
      </div>
      <div class="login-forget">
        <a @click="$router.push('/forget')">忘记密码？</a>
      </div>
      <van-button :disabled="isDisabled" size="large" @click="onClickLogin">登录</van-button>
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
      this.$router.push("/");
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

<style lang="scss" scoped>
@import "@/assets/scss/global";
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  font-size: 0.4rem;
  background: #fff;
  .van-nav-bar {
    background: none;
    .van-nav-bar__text {
      color: #333;
    }
  }

  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }

  //返回图标
  .van-icon {
    color: #333;
  }

  .main {
    padding: 15vw 10vw;

    h2 {
      margin-top: 24px;
      margin-bottom: 64px;
    }
    .van-cell {
      padding: 2vw 0vw;
      margin-top: 4vw;
    }
    .van-cell:not(:last-child)::after {
      border-color: #ccc;
      left: 0;
    }
    .login-input {
      margin: {
        top: 5vw;
        bottom: 10vw;
      }
    }

    .login-input-verify {
      color: #999;
    }
    .login-forget {
      text-align: right;
      margin-bottom: 0.5rem;
      a {
        color: #158cde;
        font-size: 14px;
      }
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