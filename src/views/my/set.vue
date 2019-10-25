<template>
  <div class="my-set-index">
    <van-nav-bar title="个人资料" left-arrow @click-left="$router.go(-1)" />
    <van-cell title="头像" is-link>
      <van-image round width="1.2rem" height="1.2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-cell>
    <van-cell title="头像" is-link>
      <van-image round width="1.2rem" height="1.2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-cell>
  </div>
</template>

<style lang="scss">
.my-set-index {
  width: 100vw;
  height: 100vh;

  .van-cell,.van-icon {
    line-height: 1.2rem;
  }
}
</style>