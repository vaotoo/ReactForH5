interface IQuickInfo {
    title: string;
    icon: string;
    href: string;
    background?: string;
}

export const QuickList: IQuickInfo[] = [{
    title: '热门商品',
    icon: 'shangpin-xianxing',
    href: 'javascript:;',
    background: '#09c'
}, {
    title: '账单',
    icon: 'zhangdan-xianxing',
    href: 'javascript:;'
}, {
    title: '礼包',
    icon: 'icon_gift',
    href: 'javascript:;',
    background: '#ce7676'
}, {
    title: '计算工具',
    icon: 'jisuanqilishuai-xianxing',
    href: 'javascript:;',
    background: '#b59361'
}, {
    title: '园区',
    icon: 'qiyeyuanquwuye-xianxing',
    href: 'javascript:;',
    background: '#08f'
}, {
    title: '寄件',
    icon: 'jijianfasong-xianxing',
    href: 'javascript:;'
}, {
    title: '物流状态',
    icon: 'yunshuzhongwuliu-xianxing',
    href: 'javascript:;',
    background: '#09f'
}, {
    title: '游戏',
    icon: 'game',
    href: 'javascript:;'
}];
