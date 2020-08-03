<template>
  <div>
    <div>
      <van-nav-bar
        title="脑筋急转弯"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div>
      <div>
        {{obj.title}}
      </div>
      <div class="showe">
        <van-button type="info" @click="exhibit">{{text}} </van-button>
        <div v-if="show">
          <p>答案</p>{{obj.content}}
          <p>提示</p>{{obj.tip}}
        </div>
      </div>

    </div>
    <div class="botton">
      <van-button type="info" @click="up">上一个</van-button>
      <van-button type="info" @click="down">下一个</van-button>
    </div>
  </div>
</template>
<script>
import words from './mind.js'
export default {
  data () {
    return {
      show: false,
      str33: null,
      obj: {},
      text: ' 显示答案'
    }
  },
  created () {
    this.randomWord()
  },
  mounted () {
    // console.log(this.$route.query, 123)
    /* const date = '2020-02-02'
    this.str = new Date(date) */
    this.str33 = this.$route.query.b
  },
  methods: {
    randomWord () {
      const index = Math.floor(Math.random() * words.length)
      this.index = index
      this.num = index
      this.obj = words[index]
    },
    onClickLeft () {
      this.$router.go(-1)
    },
    exhibit () {
      // if (this.show === true) {
      //   this.show = false
      // } else {
      //   this.show = true
      // }
      this.show = !this.show
      /*  if (this.show) {
        this.text = '隐藏答案'
      } else {
        this.text = '显示答案'
      } */
      /*  this.show ? this.text = '隐藏答案' : this.text = '显示答案' */
      this.text = (this.show && '隐藏答案') || '显示答案'
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
.showe {
  padding-top: 10px;
}
.botton {
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
}
</style>
