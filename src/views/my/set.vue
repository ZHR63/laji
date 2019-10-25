<template>
  <div class="my-set-index">
    <van-nav-bar title="个人资料" left-arrow @click-left="$router.go(-1)" />
    <van-cell title="头像" is-link>
      <van-image round width="1.2rem" height="1.2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-cell>
    <van-cell title="昵称" is-link value="王小二" />
    <van-cell title="手机号" is-link value="18965652323" />
    <van-cell title="我的地址" is-link  />
    
    <div class="set-button">
      <van-button  size="large" >退出</van-button>
    </div>
    
  </div>
</template>

<style lang="scss">
.my-set-index {
  width: 100vw;
  height: 100vh;

  .van-cell,.van-icon {
    line-height: 1.2rem;
  }
  .set-button{
    padding: 24px 15px;
  }
}
</style>