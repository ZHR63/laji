export default [


    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/Home'),
        meta: {
            index: 1
        }
    },

    // 选择地址
    {
        path: '/select-location',
        name: 'select-location',
        component: () => import('@/views/home/SelectLocation.vue'),
        meta: {
            index: 4
        }
    },

    // 新增地址
    {
        path: '/add-location',
        name: 'add-location',
        component: () => import('@/views/home/AddLocation.vue'),
        meta: {
            index: 5
        }
    },

    // 搜索
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/home/Search.vue'),
        meta: {
            index: 2
        }
    },

    // 搜索成功
    {
        path: '/search-succeed',
        name: 'search-succeed',
        component: () => import('@/views/home/SearchSucceed.vue'),
        meta: {
            index: 3,
        }
    },

    // 搜索失败
    {
        path: '/search-error',
        name: 'search-error',
        component: () => import('@/views/home/SearchError.vue'),
        meta: {
            index: 3,
        }
    },

    // 垃圾分类
    {
        path: '/classify',
        name: 'classify',
        component: () => import('@/views/home/Classify.vue'),
        meta: {
            index: 2,
        }
    },

    // 预约上门
    {
        path: '/reserve-clear',
        name: 'reserve-clear',
        component: () => import('@/views/home/ReserveClear.vue'),
        meta: {
            index: 3
        }
    },

    // 首页2
    {
        path: '/serve',
        name: 'serve',
        component: () => import('@/views/home/Serve.vue'),
        meta: {
            index: 2
        }
    },

    // 家庭垃圾
    {
        path: '/serve-family',
        name: 'serve-family',
        component: () => import('@/views/home/ServeFamily.vue'),
        meta: {
            index: 2
        }
    },

    // 企业垃圾
    {
        path: '/serve-enterprise',
        name: 'serve-enterprise',
        component: () => import('@/views/home/ServeEnterprise.vue'),
        meta: {
            index: 3
        }
    },

    // 旧物估价
    {
        path: '/estimate',
        name: 'estimate',
        component: () => import('@/views/home/Estimate.vue'),
        meta: {
            index: 2,
        }
    },

    // 旧物处理
    {
        path: '/old-dispose',
        name: 'old-dispose',
        component: () => import('@/views/home/OldDispose.vue'),
        meta: {
            index: 3,
        }
    },


]