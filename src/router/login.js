export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login'),
        meta: {
            index: 0
        }
    },

    //注册
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/login/Register.vue'),
        meta: {
            index: 1
        }
    },

    //忘记密码
    {
        path: '/forget',
        name: 'forget',
        component: () => import('@/views/login/Forget.vue'),
        meta: {
            index: 1
        }
    },
]
