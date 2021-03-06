export default [{
    path: '/',
    component: 'index'
}, {
    title: '访问异常',
    path: '/404',
    component: '404'
}, {
    path: '/logout',
    redirect: '/'
}, {
    title: '购物车',
    path: '/shoppingCar',
    component: 'shoppingCar/views/shoppingCar'
}, {
    title: '订单列表',
    path: '/orderList',
    component: 'orderList/views/orderList'
}, {
    title: '设置',
    path: '/setting',
    component: 'setting/views/setting'
}, {
    title: '登录',
    path: '/login',
    component: 'login/views/login'
}, {
    title: '注册',
    path: '/register',
    component: 'register/views/register'
}, {
    title: '没有权限',
    path: '/forbidden',
    component: 'forbidden/views/Forbidden'
}];
