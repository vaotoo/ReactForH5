import React from 'react';
import { Carousel } from 'antd-mobile';
import { BannerList, IBannerInfo } from './BannerConfig';
import style from './Banner.less';

interface IBannerProps { }

interface IBannerState { }

class BannerComponent extends React.Component<IBannerProps, IBannerState> {
    constructor(props: IBannerProps, context?: any) {
        super(props, context);
    }

    private executeItem(): React.ReactNode {
        const itemNode: React.ReactNode = BannerList.map((item: IBannerInfo, index: number) => {
            return (
                <div key={index} className={style.item}>
                    {/* <a
                        href={item.href}
                        target="_blank"
                        className={style.itemDesc}
                    >
                        {item.desc}
                    </a> */}
                    <div
                        className={style.itemImg}
                        style={{ backgroundImage: `url(${item.img})` }}
                    />
                </div>
            );
        });
        return itemNode;
    }

    public render() {
        return (
            <div className={style.banner}>
                <Carousel
                    infinite={true}
                    autoplay={true}
                    className={style.carousel}
                >
                    {this.executeItem()}
                </Carousel>
                <div className={style.layer} />
            </div>
        );
    }
}

export default BannerComponent;
