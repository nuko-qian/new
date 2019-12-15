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
    var validateMobile = function (rule, value, callback) { // 第二个参数为值,第三个为回调函数
      let s = /^[\u4e00-\u9fa5]+$/
      if (s.test(value)) {
        callback()// 回调函数
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
  created () {
    this.form.name = this.$route.query.name
    this.form.id = this.$route.query.id
    this.form.age = this.$route.query.age
  },
  methods: {
    onSubmit () {
      console.log(this.$refs.form.validate, 132)
      // console.log(this.$refs.form.validate)
      this.$refs.form.validate((e) => { // this.$refs.form.validate 拦截检验
        // console.log(this)
        // console.log(e)
        if (!e) {
          return
        }
        let type = this.$route.query.type // 接收
        let str = {
          add: '此操作将新增,是否继续?',
          updata: '此操作将编辑,是否继续?'
        }[type]
        that.$confirm(str, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if (type === 'add') {
            that.add()
          } else {
            that.update()
          }
        }).catch(() => {
        })
      })
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
    update () {
      let url = this.api.update
      this.$http.post(url, {
        name: this.form.name,
        id: this.form.id,
        age: this.form.age
      }).then((res) => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
        this.$router.push({ path: '/' })
      }).catch(e => {
        // console.log(e)
      })
    },
    goback () {
      that.$confirm('还未保存, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.go(-1)
      }).catch(() => {
      })
    }
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
