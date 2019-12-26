<template>
<div class="test">
  <comcollapse :list="list"></comcollapse>
</div>
</template>
<script>
import comcollapse from '../components/comcollapse'
export default {
  components: {
    comcollapse
  },
  data () {
    return {
      activeName: '1',
      activeName1: '1',
      activeName2: '1',
      list: [
        {
          title: '11111111111111',
          content: '我是内容',
          children: [
            {
              title: '22222222222222222',
              content: '我是内容111',
              children: [
                {
                  title: '777777777777',
                  content: '我是内容222',
                  children: [
                    {
                      title: '777777777777',
                      content: '我是内容222'
                    }
                  ]
                }
              ]
            },
            {
              title: '3333333333333333',
              content: '我是内容3333'
            }
          ]
        },
        {
          title: '99999999999999999',
          content: '我是内容11111',
          children: [
            {
              title: '8888888888888888',
              content: '我是内容',
              children: [
                { title: '77777777777777', content: '我是内容' }
              ]
            }
          ]
        },
        {
          title: '99999999999999999',
          content: '我是内容11111',
          children: [
            {
              title: '8888888888888888',
              content: '我是内容',
              children: [
                { title: '77777777777777', content: '我是内容' }
              ]
            }
          ]
        },
        {
          title: '99999999999999999',
          content: '我是内容11111',
          children: [
            {
              title: '8888888888888888',
              content: '我是内容',
              children: [
                { title: '77777777777777', content: '我是内容' }
              ]
            }
          ]
        }
      ]
    }
  },
  created () { },
  methods: {}
}
</script>
<style lang='scss'>
.test {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #ccc;
}
.el-collapse-item__wrap {
  padding: 20px;
}
</style>
