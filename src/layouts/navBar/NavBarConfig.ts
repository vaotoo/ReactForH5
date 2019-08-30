/**
 * @description title 标题
 * @description path 路径
 * @description badge 徽标数字
 * @description icon 自定义图标
 */
export interface INavBarInfo {
    title: string;
    path: string;
    badge: number;
    icon: string;
}

export const NavBarList: INavBarInfo[] = [{
    title: '首页',
    path: '/',
    badge: 0,
    icon: 'dianpu-xianxing'
}, {
    title: '购物车',
    path: '/shoppingCar',
    badge: 1,
    icon: 'caigou-xianxing'
}, {
    title: '订单列表',
    path: '/orderList',
    badge: 20,
    icon: 'liebiao'
}, {
    title: '我',
    path: '/setting',
    badge: 0,
    icon: 'icon_signal'
}];
