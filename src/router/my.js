export default [{
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/My'),
        meta: {
            index: 1
        }
    },
   

    {
        path: '/my-set',
        name: 'mySet',
        component: () => import('@/views/my/set.vue'),
        meta: {
            index: 2
        }
    },

    // 我的估价
    {
        path: '/valued',
        name: 'valued',
        component: () => import('@/views/my/Valued.vue'),
        meta: {
            index: 2
        }
    },

    // 我的钱包
    {
        path: '/wallet',
        name: 'wallet',
        component: () => import('@/views/my/Wallet.vue'),
        meta: {
            index: 2
        }
    },
    
    // 我的意见
    {
        path: '/propose',
        name: 'propose',
        component: () => import('@/views/my/Propose.vue'),
        meta: {
            index: 2
        }
    },

    // 关于
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/my/About.vue'),
        meta: {
            index: 2
        }
    },
]