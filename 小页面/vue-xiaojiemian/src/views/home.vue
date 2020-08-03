<template>
  <div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="flex">
      <div class="flex-item" v-for="(item, index) in list" :key="index"
      @click="go(item.url,item.arg)">
        <i class="icon" :class="[item.icon]"></i>
        <span>{{item.label}}</span>
      </div>
    </div>
    <div class="text">
      <h3 style="text-align:center;">温馨雨露</h3>
      <p>不管昨夜经历了怎样的泣不成声，早晨醒来这个城市依然车水马龙。</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        { label: '开心', icon: 'icon-fun', url: '/fun', arg: ['你是参数'] },
        { label: '灯迷', icon: 'icon-deng', url: '/deng', arg: ['你是对象'] },
        { label: '脑筋急转弯', icon: 'icon-mind', url: '/nao', arg: { c: 123 } }
      ]
    }
  },
  created () { },
  methods: {
    go (url, arg) {
      this.$router.push({ path: url, query: { b: arg } })
    }

  }
}
</script>
<style lang='scss'>
@mixin border1 {
  border: 1px solid #ccc;
}
.banner {
  // @include border1;
  height: 160px;
  padding: 12px;
}
.flex {
  // @include border1;
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  padding: 12px;
  // height: 100px;
  .flex-item {
    // @include border1;
    width: 33.33%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-size: cover !important;
      &.icon-fun {
        background: url("~@/assets/fun.png");
      }
      &.icon-deng {
        background: url("~@/assets/deng.png");
      }
      &.icon-mind {
        background: url("~@/assets/mind.png");
      }
    }
  }
}
.text {
  // @include border1;
  padding: 12px;
  height: 100px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39ed6f;
}
</style>
