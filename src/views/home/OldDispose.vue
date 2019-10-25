<template>
  <div class="old-dispose">
    <van-nav-bar title="旧物处理" left-arrow @click-left="$router.go(-1)" />

    <div class="old-dispose-order">
      <van-cell title="估价名称" value="估价状态" />
      <div class="old-dispose-order-content">
        <van-image width="20vw" height="20vw" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="order-content-width">
          <h3 class="van-ellipsis">honor/荣耀 荣耀20 pro手机官方双卡双待20S</h3>
          <p>品牌： 三星</p>
          <p>购买日期： 2019-10-25</p>
          <p>保修期： 在保</p>
          <p>功能状态： 故障</p>
        </div>

        <div class="order-content-money">￥19.9</div>
      </div>

      <div class="old-dispose-order-count">估价金额为 ￥19.9</div>

      <div class="old-dispose-order-btn">
        <van-button class="btn">确认</van-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.old-dispose {
  width: 100vw;
  min-height: 100vh;

  .old-dispose-order {
    background: #fff;
    padding-bottom: 0.4rem;
  }

  .old-dispose-order-content {
    position: relative;
    display: flex;
    padding: 0.5rem;

    .order-content-width {
      padding: 0 0.3rem;
      width: 55vw;
      font-size: 0.3rem;
      color: #999;
    }

    h3 {
      color: #333;
      font-size: 0.4rem;
    }

    .order-content-money {
      position: absolute;
      color: #f40;
      font-size: 0.6rem;
      right: 0.4rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .old-dispose-order-count {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.3rem;
    padding-right: 0.4rem;
    font-size: 0.3rem;
  }

  .old-dispose-order-btn {
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    font-size: 0.3rem;
    border-radius: 1rem;
    height: 0.75rem;
    line-height: 0.75rem;
    color: #666;
    padding: 0 0.3rem;
    margin: 0 0.3rem;
  }
}
</style>