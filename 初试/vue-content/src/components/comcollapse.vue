<template>
<div>
<el-collapse v-model="activeName" accordion>
  <el-collapse-item :title="item.title" :name="index" v-for="(item, index) in list" :key="index">
      <div v-if="item.children">
        <comcollapse :list="item.children"></comcollapse>
      </div>
      <div v-else>
        {{item.content}}
      </div>
  </el-collapse-item>
</el-collapse>
</div>
</template>
<script>

export default {
  name: 'comcollapse',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeName: ''
    }
  },
  created () { },
  methods: {}
}
</script>
<style lang='scss'>
</style>
