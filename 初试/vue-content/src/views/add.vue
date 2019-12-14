<template>
  <div class="add">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="名字" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="goback">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
let that
export default {
  data () {
    that = this
    var validateMobile = function (rule, value, callback) {
      let s = /^[\u4e00-\u9fa5]+$/
      if (s.test(value)) {
        callback()
      } else {
        callback(new Error('请输入中文'))
      }
    }
    return {
      form: {
        name: '',
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
          /* { pattern: /^[\u4e00-\u9fa5]+$/, message: '请输入中文', trigger: 'blur' } */
          { validator: validateMobile, trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: '请输入数字', trigger: 'blur' }
        ]
      }
    }
  },
  created () { },
  methods: {
    onSubmit () {
      // console.log(this.$refs.form.validate)
      this.$refs.form.validate((e) => { // this.$refs.form.validate 拦截检验
        // console.log(this)
        // console.log(e)
        if (e) {
          that.$confirm('此操作将新增, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            that.add()
          }).catch(() => {
            that.$message({
              type: 'info',
              message: '已取消新增'
            })
          })
        }
      }
      )
    },
    add () {
      let url = this.api.add + '?name=' + this.form.name + '&age=' + this.form.age
      this.$http.get(url).then((res) => {
        this.$router.go(-1)
        this.$message({
          type: 'success',
          message: '新增成功!'
        })
      }).catch(e => {

      })
    },
    goback () {
      this.$router.go(-1)
    }
  }
  // 离开这个页面时提示
  /* beforeRouteLeave: (to, from, next) => {
    console.log(this)
    console.log(that)
    that.$confirm('还未保存, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      next()
    }).catch(() => {
      next(false)
    })
  }, */
  // 进入这个页面之前提示
  /* beforeRouteEnter: (to, from, next) => { // 初始化页面
    next(vm => {
      alert('hello' + vm.name)
    })
  } */
}
</script>
<style lang='scss'>
.add {
  .el-form {
    .el-form-item {
      width: 300px;
    }
  }
  .el-button {
    margin-left: 18px;
  }
}
</style>
