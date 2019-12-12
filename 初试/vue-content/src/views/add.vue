<template>
<div class="add">
<el-form ref="form" :model="form" :rules="rules" label-width="80px">
  <el-form-item label="名称" prop="name">
    <el-input  v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model="form.age"></el-input>
  </el-form-item>
</el-form>

  <el-button type="primary" @click="onSubmit">提交</el-button>
  <el-button @click="goback">返回</el-button>
</div>
</template>
<script>

export default {
  data () {
    function validPhone (r, v, cb) {
      let reg = /^[\u4e00-\u9fa5]+$/
      // console.log(reg.test(value))
      if (reg.test(v)) {
        cb()
      } else {
        cb(new Error('请输入中文'))
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
          // { pattern: /^[\u4e00-\u9fa5]+$/, message: '请输入中文', trigger: 'blur' }
          { trigger: 'blur', validator: validPhone }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: '请输入数字', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    console.log(this.$route.query, 7887687676) // 接收
    this.form.name = this.$route.query.name
    this.form.age = this.$route.query.age
    this.form.id = this.$route.query.id
  },
  methods: {
    onSubmit () {
      // console.log(this.$refs.form.validate)
      this.$refs.form.validate(vali => {
        if (!vali) {
          return
        }
        let type = this.$route.query.type //接收
        let str = {
          add: '此操作将新增,是否继续?',
          update: '此操作将编辑,是否继续?'
        }[type]
        this.$confirm(str, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if (type === 'add') {
            this.add()
          } else {
            this.update()
          }
        }).catch(() => {
        })
      })
    },
    add () {
      let url = this.api.add + '?name=' + this.form.name + '&age=' + this.form.age
      this.$http.get(url).then((res) => {
        this.$message({
          type: 'success',
          message: '成功!'
        })
        this.$router.push({ path: '/' })
      }).catch(e => {
        console.log(e)
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
          message: '成功!'
        })
        this.$router.push({ path: '/' })
      }).catch(e => {
        console.log(e)
      })
    },
    goback () {
      this.$router.go(-1)
    }
  }
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
    margin-left: 78px;
  }
}
</style>
