<template>
  <div>
    <div>
      <van-nav-bar
        title="开心一刻"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
   <div>
      <div>
      {{ obj.title}}
    </div>
    <div>
      {{ obj.content}}
       {{index}}
    </div>
    <div>
      <van-stepper v-model="num" min="0" max="102" integer @change="aa"/>
    </div>
   </div>
    <div class="botton">
      <van-button type="info" @click="up">上一个</van-button>
      <van-button type="info" @click="down">下一个</van-button>
    </div>
  </div>
</template>
<script>

import words from './fun.js'
export default {

  data () {
    return {
      str: this.$route.query.b,
      obj: {},
      index: 0,
      value: 1,
      num: 0
    }
  },
  created () {
    this.randomWord()
  },
  watch: {

  },
  methods: {
    randomWord () {
      const index = Math.floor(Math.random() * words.length)
      this.index = index
      this.num = index
      this.obj = words[index]
    },
    onClickLeft () {
      this.$router.back()
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
      if (this.index > words.length - 1) {
        this.index = 0
      }
      this.obj = words[this.index]
    },
    aa (n) {
      console.log(this.num, n)

      this.index = this.num
      if (words[this.index]) {
        this.obj = words[this.index]
      }
    }

  }
}
</script>
<style lang='scss'>
.botton {
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
}
</style>
