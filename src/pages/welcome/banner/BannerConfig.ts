export interface IBannerInfo {
    img: string;
    desc: string;
    href: string;
}

export const BannerList: IBannerInfo[] = [{
    img: require('./image/banner1.jpg'),
    desc: '百度一下 你就知道',
    href: 'http://www.baidu.com'
}, {
    img: require('./image/banner2.jpg'),
    desc: '不需要别人给与 你要的触手可及',
    href: 'http://www.google.com'
}, {
    img: require('./image/banner3.jpg'),
    desc: 'Google',
    href: 'http://www.google.com'
}];
