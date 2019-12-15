<template>
  <div class="listAdd">
      <div class="listAddTop">
        <!-- 添加按钮 -->
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名字" prop="name" placeholder="请输入名字">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button  @click="queryName()">查询</el-button>
            <el-button  @click="reset()">重置</el-button>
            <el-button type="primary" @click="add">点击添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="listTable">
        <!-- 渲染列表 -->
        <template>
          <el-table
            :data="tableData"
            height="450"
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
             <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
                <el-button @click="updata(scope.row)" type="text" size="small">编辑</el-button>
              </template>
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
      this.$router.push({ path: '/add', query: { type: 'add' } })
    },
    updata (scope) {
      console.log(scope)
      this.$router.push({ path: '/add', query: { ...scope, type: 'updata' } })
    },
    del (id) {
      let url = this.api.del + '?id=' + id
      this.$http.get(url).then((res) => {
        this.$confirm('此操作将删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData = res.data.data
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }).catch(e => {
        console.log(e)
      })
    },
    queryName () {
      let url = this.api.queryName + '?name=' + this.ruleForm.name
      this.$http.get(url).then((res) => {
        console.log(res)
        this.tableData = res.data.data
      }).catch(e => {
        console.log(e)
      })
    },
    reset () {
      this.ruleForm.name = ''
      this.getList()
    }
  }
}
</script>
<style lang='scss'>
.listAdd {
  padding-top: 20px;
  background-color: skyblue;
  .listAddTop {
    margin-left: 325px;
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
