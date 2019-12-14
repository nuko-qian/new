import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import Api from './api/index'

/* 引入初始化样式 */
import './style/index.scss'

/* 引入element组件 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入api

// 全局前置守卫beforEach : 进去之前要做的事情
router.beforeEach((to, from, next) => {
  /*  console.log(to)
   console.log(from)
   console.log(next) */
  next()
})

Vue.use(ElementUI)

Vue.prototype.api = Api // 绑定到原型上 Api是与上面的一致 api是将用到的
Vue.prototype.$http = Axios // 绑定到原型上

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
