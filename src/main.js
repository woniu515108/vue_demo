// 导入vue实例对象
import Vue from 'vue'

	
import Less from 'Less'

// 导入element组件库
import ElementUI from 'element-ui';
// 导入element样式文件
import 'element-ui/lib/theme-chalk/index.css';



// 导入APP根组件
import App from './App'

// 导入路由
import router from './router'

Vue.config.productionTip = false;

// 将element中使用vue
Vue.use(ElementUI);

/**
 * new了一个vue实例
 * el： 挂载在#app的节点上
 * router： 将导入的路由挂载在当前vue实例上
 * components: 将导入的app跟组件注册成一个组件
 * template： 组件名称
 *  */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
