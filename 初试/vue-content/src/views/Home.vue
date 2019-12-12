<template>
<div class="listAdd">
    <div class="listAddTop">
      <!-- 添加按钮 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名字" prop="name" placeholder="请输入名字">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="queryName()">查询</el-button>
          <el-button @click="reset()">重置</el-button>
          <el-button type="primary" @click="add">点击添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="listTable">
      <!-- 渲染列表 -->
      <el-table
        :data="tableData" :header-cell-style="{background:'#F5F7FA',color:'#606266'}" border>
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="70">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          align="center"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          align="center"
          min-width="80">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
            <el-button @click="update(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
      ruleForm: {
        age: '',
        name: '',
        id: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须为数字值' }
        ]
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
    /* 添加 */
    add () {
      this.$router.push({ path: '/add', query: { type: 'add' } })
    },
    /* 删除 */
    del (item) {
      console.log(item)
      this.$confirm('此操作将编辑,是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let url = this.api.del + '?id=' + item
        this.$http.get(url).then((res) => {
          this.tableData = res.data.data
          this.getList()
        }).catch(e => {
          console.log(e)
        })
      }).catch(() => {
      })
    },
    /* 修改 */
    update (scope) {
      console.log(scope)
      this.$router.push({ path: '/add', query: { ...scope, type: 'update' } }) // 传递
    },
    /* 搜索 */
    queryName () {
      let url = this.api.queryName + '?name=' + this.ruleForm.name
      this.$http.get(url).then((res) => {
        console.log(res)
        this.tableData = res.data.data
      }).catch(e => {
        console.log(e)
      })
    },
    /* 重置 */
    reset () {
      this.ruleForm.name = ''
      this.getList()
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
    .el-table {
      border: 1px solid #fff;
      margin: 0 auto;
      width: 875px;
    }
  }
}
</style>
