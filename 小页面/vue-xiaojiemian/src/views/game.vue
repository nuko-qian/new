<template>
  <div>
    {{list}}
    <ul class="list">
      <template v-for="(item,index) in chulist ">
        <li v-if="item.show" class="list-item" :class="{'borderclass': index % 2 === 1}"
        :style="{'--hue-color':item.color}" :key="index" >{{item.label}}{{isShow}}</li>
      </template>

    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
      ]
    }
  },
  created () { },
  mounted () {
    this.list = [
      { label: 1, id: 0, color: 80, show: true },
      { label: 2, id: 1, color: 100, show: true },
      { label: 3, id: 2, color: 100, show: this.isShow },
      { label: 4, id: 3, color: 100, show: true },
      { label: 5, id: 3, color: 100, show: true }
    ]
  },
  computed: {
    isShow () {
      return '0'
    },
    chulist () {
      // 逻辑
      return [
        { label: 1, id: 0, color: 80, show: true },
        { label: 2, id: 1, color: 100, className: ['borderclass', 'qqqq'], show: true },
        { label: 3, id: 2, color: 100, show: this.isShow },
        { label: 4, id: 3, color: 100, className: ['borderclass'], show: true },
        { label: 5, id: 3, color: 100, show: true }
      ]
    }
  },
  methods: {}
}
</script>
<style lang='scss'>
@mixin border1 {
  border: 1px solid #ccc;
}
.list {
  padding: 12px;
  .list-item {
    @include border1;
    --hue-color: 20;
    height: 50px;
    padding: 6px 12px;
    margin-bottom: 12px;
    border-radius: 5px;
    background: hsl(var(--hue-color), 50%, 70%);
    &.borderclass {
      border: 1px solid rgb(0, 255, 242);
    }
  }
}
</style>
