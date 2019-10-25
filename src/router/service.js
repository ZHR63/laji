export default [

    {
        path: '/service',
        name: 'service',
        component: () => import('@/views/service/Service.vue'),
        meta: {
            index: 1
        }
    }
]