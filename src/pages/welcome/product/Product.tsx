import React from 'react';
import Moment from 'moment';
import { Bind } from 'lodash-decorators';
import { DatePicker, List, Pagination, Icon } from 'antd-mobile';
import style from './Product.less';

interface IProductProps { }

interface IProductState {
    dateTime: Date | undefined;
}

class ProductComponent extends React.Component<IProductProps, IProductState> {
    constructor(props: IProductProps, context?: any) {
        super(props, context);
        this.state = {
            dateTime: undefined
        };
    }

    private executeItem(): React.ReactNode {
        const imgMap = {
            1: require('./img/product1.jpg'),
            2: require('./img/product2.jpg')
        };

        const nodeList = [1, 2, 3, 4, 5].map((value, index: number) => {
            return (
                <div
                    key={index}
                    className={style.item}
                    style={{
                        backgroundImage: `url(${imgMap[value % 2 ? 1 : 2]})`
                    }}
                >
                    <span className={style.price}>
                        ￥{Math.floor(Math.random() * 1000)}
                    </span>
                </div>
            );
        });
        return nodeList;
    }

    public render(): React.ReactNode {
        return (
            <div className={style.productContent}>
                <div className={style.productItem}>
                    <div className={style.title}>
                        特价专区
                    </div>
                    <div className={style.content}>
                        {this.executeItem()}
                    </div>
                </div>
                <div className={style.productItem}>
                    <div className={style.title}>
                        热卖专区
                    </div>
                    <div className={style.content}>
                        {this.executeItem()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductComponent;
