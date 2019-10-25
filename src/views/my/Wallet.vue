<template>
  <div class="my-set-index">
    <van-nav-bar title="我的钱包" left-arrow @click-left="$router.go(-1)" />
    
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