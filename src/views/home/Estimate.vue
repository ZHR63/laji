<template>
  <div class="estimate">
    <van-nav-bar title="旧物估价" left-arrow @click-left="$router.go(-1)" />

    <van-field placeholder="旧物名称 如冰箱" />
    <van-field placeholder="旧物品牌 如海尔" />
    <van-cell
      title="购买日期"
      icon="comm iconfont icon-shijian"
      :value="timeDate"
      is-link
      @click="isTimeShow = true"
    />

    <van-collapse v-model="activeNames" style="margin-bottom: 3rem;">
      <van-collapse-item title="保修期" style="margin-bottom: .3rem;" :value="protect" name="2">
        <van-radio-group v-model="radio" @change="onClickProtect">
          <van-cell title="在保" @click="radio = '1'">
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell title="超保" @click="radio = '2'">
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-radio-group>
      </van-collapse-item>

      <van-collapse-item title="功能状况" style="margin-bottom: .3rem;" :value="dataFunText" name="3">
        <div class="estimate-fun">
          <van-button
            :class="{'btn-active' : i.is}"
            v-for="(i, index) in dataFun"
            :key="index"
            @click="onClickFun(i.name, index)"
            size="large"
          >{{i.name}}</van-button>
        </div>
      </van-collapse-item>

      <p style="padding-left: .4rem;color: #666;">将正侧上下面如实拍照，至少十张</p>
      <van-collapse-item title="外观" name="4">
        <van-uploader v-model="fileList" multiple />
      </van-collapse-item>
    </van-collapse>

    <!-- 购买日期 -->
    <van-popup v-model="isTimeShow" position="bottom" :style="{ height: '50%' }">
      <van-datetime-picker
        @cancel="isTimeShow = false"
        @confirm="onClickTime"
        v-model="currentDate"
        type="date"
      />
    </van-popup>

    <van-button class="config-btn" type="primary" size="large">确定估价</van-button>
  </div>
</template>

<script>
export default {
  name: "brand",
  data() {
    return {
      isTimeShow: false, // 是否显示时间弹出框
      timeDate: "", //日期时间

      protect: "", //保修期

      radio: 1,

      activeNames: ["1"],
      dataFun: [
        {
          name: "没好",
          is: false
        },
        {
          name: "故障",
          is: false
        },
        {
          name: "修过",
          is: false
        },
        {
          name: "已坏",
          is: false
        }
      ],

      dataFunText: "内容",
      fileList: [],
      currentDate: new Date()
    };
  },

  methods: {
    // 点击功能状况
    onClickFun(value, index) {
      for (let i of this.dataFun) {
        i.is = false;
      }
      this.dataFunText = value;
      this.dataFun[index].is = true;
      this.activeNames = ["1"];
    },

    // 点击确定时间
    onClickTime(value) {
      var date = new Date(value);
      this.isTimeShow = false;
      this.timeDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },

    // 点击保证金
    onClickProtect(value,name) {
      if (value == 1) {
        this.protect = '在保'
      }else {
        this.protect = '超保'
      }
      this.activeNames = ["1"];
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global";
.estimate {
  width: 100vw;
  min-height: 100vh;

  .estimate-fun {
    padding: 0 0.4rem;

    .van-button {
      margin-bottom: 0.3rem;
      background: #e2e2e2;
      color: #000;
    }
  }

  .btn-active {
    border: 1px solid $theme-color;
    background: #c0f3f7;
    color: #666;
  }

  .config-btn {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>
