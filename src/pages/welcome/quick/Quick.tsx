import React from 'react';
import { Bind } from 'lodash-decorators';
import { Toast } from 'antd-mobile';
import Icon from '@components/icon/Icon';
import style from './Quick.less';
import { QuickList } from './Quick.conf';

interface IQuickProps { }

interface IQuickState { }

class ProductComponent extends React.Component<IQuickProps, IQuickState> {
    constructor(props: IQuickProps, context?: any) {
        super(props, context);
    }

    @Bind()
    private onClick(title: string): void {
        Toast.fail(`${title}功能暂未开放`);
    }

    private executeItem(): React.ReactNode {
        const nodeList = QuickList.map((item, index: number) => {
            return (
                <div
                    key={index}
                    className={style.item}
                    onClick={this.onClick.bind(this, item.title)}
                >
                    <Icon
                        type={item.icon}
                        className={style.icon}
                        style={{ background: item.background }}
                    />
                    <div className={style.title}>
                        {item.title}
                    </div>
                </div>
            );
        });
        return nodeList;
    }

    public render(): React.ReactNode {
        return (
            <div className={style.quickContent}>
                {this.executeItem()}
            </div>
        );
    }
}

export default ProductComponent;
