<template>
<div>
    <div>
      <van-nav-bar
        title="猜灯谜"
        left-text=" "
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div>
     <h3> {{obj.title}}</h3>
    </div>
    <div class="text">
      <van-button type="info" @click="exhibit">{{text}}</van-button>
      <div v-if="show">
        <p>答案</p>{{obj.content}}
        <p>解析</p>{{obj.tip}}
      </div>
    </div>
    <div>
        <div class="botton">
      <van-button type="info" @click="up">上一个</van-button>
      <van-button type="info" @click="down">下一个</van-button>
    </div>
    </div>
</div>
</template>
<script>
import words from './deng.js'
export default {
  data () {
    return {
      show: false,
      text: '显示答案',
      obj: {},
      str: ''
    }
  },
  created () {
    this.randomWord()
    /* console.log(this.$route.query)
    this.str = this.$route.query.b */
  },
  methods: {
    onClickLeft () {
      this.$router.push('./home')
    },
    randomWord () {
      const index = Math.floor(Math.random() * words.length)
      this.index = index
      this.num = index
      this.obj = words[index]
    },
    exhibit () {
      this.show = !this.show
      if (this.show) {
        this.text = '隐藏答案'
      } else {
        this.text = '显示答案'
      }
      this.text = (this.show && '隐藏2答案') || '显示2答案'
    },
    up () {
      this.index--
      if (this.index < 0) {
        this.index = words.length - 1
      }
      this.obj = words[this.index]
    },
    down () {
      this.index++
      if (this.index > words.length) {
        this.index = 0
      }
      this.obj = words[this.index]
    }
  }
}
</script>
<style lang='scss'>
.text {
  padding-top: 10px;
}
.botton {
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0px;
  justify-content: space-around;
}
</style>
