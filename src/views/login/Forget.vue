<template>
  <div class="forget">
    <van-icon name="arrow-left" />

    <div class="main">
      <h3>忘记密码</h3>
      <div class="forget-input">
        <van-field v-model="userPhone" clearable placeholder="请输入用手机号" />
        <van-field v-model="verify" clearable placeholder="请输入验证码">
          <span v-if="!isVerify" slot="button" class="forget-input-verify">获取验证码</span>
          <span v-else slot="button">获取验证码</span>
        </van-field>
        <van-field v-model="userPhone" clearable placeholder="请输入密码" />
        <van-field v-model="userPhone" clearable placeholder="请确认密码" />
      </div>
      <van-button :disabled="isDisabled" size="large" >提交</van-button>
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
.forget {
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
.forget-img{
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
    .forget-input {
      margin: {
        top: 5vw;
        bottom: 10vw;
      }
    }

    .forget-input-verify {
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