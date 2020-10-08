import Vue from 'vue'

import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

Vue.use(Router)

// 这是soucreTree测试~~~~

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
    ]
})
