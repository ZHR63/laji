<template>
  <div class="search">
    <div class="search-header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="$router.push('/search-succeed')">搜索</div>
        </van-search>
      </form>
    </div>

    <div class="search-history">
      <div class="search-history-title">
        <van-cell title="热门搜索" />
        <van-icon name="fire-o" />
      </div>

      <div class="search-tips">
        <van-tag round size="medium" @click="$router.push('/search-error')">昆虫</van-tag>
        <van-tag round size="medium" @click="$router.push('/search-error')">酒瓶</van-tag>
        <van-tag round size="medium" @click="$router.push('/search-error')">塑料袋</van-tag>
        <van-tag round size="medium" @click="$router.push('/search-error')">塑料袋</van-tag>
        <van-tag round size="medium" @click="$router.push('/search-error')">塑料袋</van-tag>
      </div>
      <div class="search-history-title">
        <van-cell title="历史搜索" />
        <van-icon name="todo-list-o" />
      </div>
      <div class="search-tips">
        <van-tag round size="medium">小龙虾</van-tag>
        <van-tag round size="medium">尿不湿</van-tag>
        <van-tag round size="medium">塑料袋</van-tag>
        <van-tag round size="medium">塑料袋</van-tag>
        <van-tag round size="medium">塑料袋</van-tag>
      </div>
    </div>
    <div class="search-ad">
      <img src="@/assets/banner2.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      value: ""
    };
  },

  methods: {
    onSearch() {}
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/global';
.search {
  width: 100vw;
  min-height: 100vh;
  background: #f9f9f9;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .search-header {
    background: #f9f9f9;
    height: 6vh;
    width: 100%;

    .van-icon {
      float: left;
      font-size: 0.4rem;
      color: #333;
      line-height: 6vh;
      width: 8vw;
      padding-left: 2vw;
    }
    form {
      float: left;
      width: 88vw;
    }
    .van-search {
      padding: 0;
      background: none !important;
      height: 4vh;
      line-height: 4vh;
      margin-top: 1vh;
      overflow: hidden;

      .van-cell {
        padding: 0;
        background: #fff;
        overflow: hidden;
        border-radius: 10rem;
        height: 4vh !important;
        border: 1px solid $theme-color;
      }
    }
    .van-field__left-icon {
      margin-right: 0;
      .van-icon {
        height: 4vh;
        line-height: 4vh;
      }
    }
    .van-search__content {
      border-radius: 1rem;
      padding: 0;
    }
    .van-cell__value--alone {
      margin-top: 0.1vh;
    }
  }

  .search-history {
    padding-top: 4vw;
    background: #fff;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;

    .search-tips {
      display: flex;
      flex-wrap: wrap;
      width: 100vw;
      padding: 0.4rem;
      padding-top: 0;

      .van-tag {
        width: 15vw;
        text-align: center;
        margin: .2rem .3rem 0 0;
        padding:  {
          top: .1rem;
          bottom: .1rem;
        }
        background: #f9f9f9;
        color: #666;
      }
    }

    .search-history-title {
      height: 6vh;

      .van-icon {
        float: right;
        margin-right: 4vw;
        color: #999;
        font-size: 0.4rem;
        line-height: 6vh;
      }
    }
    .van-cell {
      font-size: 0.38rem;
      font-weight: bold;
      color: #333;
      float: left;
      width: 80vw;
    }
    .van-cell:not(:last-child)::after {
      border: 0;
    }
  }
  .search-ad {
    background: #fff;
    padding: 0;
    margin: 0;
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
