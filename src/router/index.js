import Vue from 'vue'
import Router from 'vue-router'

import login from './login' //登录
import home from './home' // 首页
import my from './my' // 我的
import order from './order' // 预约
import service from './service' //客服

Vue.use(Router)

const RouterModel = new Router({
    routes: [...login, ...home, ...my, ...order, ...service,


        // 预约
        {
            path: '/subscribe',
            name: 'subscribe',
            component: () => import('@/views/Subscribe.vue'),
            meta: {
                index: 1
            }
        },
        
       
       
        
    ]
})

export default RouterModel;