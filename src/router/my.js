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
]