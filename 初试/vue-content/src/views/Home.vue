<template>
  <div class="listAdd">
      <div class="listAddTop">
        <!-- 添加按钮 -->
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名字" prop="name" placeholder="请输入名字">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>查询</el-button>
            <el-button>重置</el-button>
            <el-button type="primary" @click="add">点击添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="listTable">
        <!-- 渲染列表 -->
        <template>
          <el-table
            :data="tableData"
            height="250"
            border>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄"
              width="180">
            </el-table-column>
            <el-table-column
              prop="id"
              label="id"
              width="180">
            </el-table-column>
          </el-table>
        </template>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' }
        ] },
      tableData: [],
      ruleForm: {
        name: '',
        age: '',
        id: ''
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    /* 拿到所有数据 */
    getList () {
      let url = this.api.queryAll
      this.$http.get(url).then((res) => {
        console.log(res)
        this.tableData = res.data.data
      }).catch(e => {
        console.log(e)
      })
    },
    add () {
      this.$router.push({ path: '/add' })
    }
  }
}
</script>
<style lang='scss'>
.listAdd {
  padding-top: 20px;
  background-color: skyblue;
  .listAddTop {
    margin-left: 250px;
    .el-form {
      .el-form-item {
        .el-form-item__content {
          margin-left: 50px !important;
          width: 300px;
        }
      }
    }
  }
  .listTable {
    background-color: #fff;
    .el-table {
      border: 1px solid #fff;
      margin: 50px auto;
      width: 720px;
    }
    .block {
      margin: 10px 0;
      text-align: center;
    }
  }
}
</style>
