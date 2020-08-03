<template>
<div>
  <!-- 主页 -->
  <router-view/>
  <van-tabbar >
    <van-tabbar-item icon="home-o" v-for="(item,index) in list " :key="index"
    @click="fn(item.url)"
    >{{item.name}}</van-tabbar-item>
  </van-tabbar>
</div>
</template>
<script>
// 用v-for循环列表,以达成动态生成列表,先建立一个数组对象, 用v-for遍历这个数组,将路径绑定到点击事件
export default {
  data () {
    return {
      active: 0,
      list: [
        { name: 'home', url: '/home' },
        { name: '游戏', url: '/game' },
        { name: '主页', url: '/centen' }
      ]
    }
  },
  created () { },
  watch: {
    /* active (n) {
      this.$router.push({ path: `/${n}` })
      console.log(`/${n}`)
    } */
  },
  methods: {
    fn: function (p) {
      if (p !== location.pathname) {
        this.$router.push({ path: p })
      }
      console.log(p)
    }
  }
}
</script>
<style lang='scss'>
</style>
