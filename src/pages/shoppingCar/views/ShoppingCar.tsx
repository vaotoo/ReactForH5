import React from 'react';
import { connect } from 'dva';
import { Bind } from 'lodash-decorators';
import { List, Button, Stepper } from 'antd-mobile';
import Icon from '@components/icon/Icon';
import { IShoppingCarInfo } from '../models/ShoppingCar';
import { ScarPay } from './util/ScarPay';
import { ScarClean } from './util/ScarClean';
import { ScarDelete } from './util/ScarDelete';
import style from './ShoppingCar.less';

interface IShoppingCarProps extends IShoppingCarInfo { }

interface IShoppingCarState { }

class ShoppingCarComponent extends React.Component<IShoppingCarProps, IShoppingCarState> {
    constructor(props: IShoppingCarProps, context?: any) {
        super(props, context);
    }

    @Bind()
    private executeListItem(list: any): JSX.Element {
        const itemNode: JSX.Element[] = list.map((item: any, index: number) => {
            return (
                <List.Item key={index}>
                    <div className={style.listItem}>
                        <div className={style.main}>
                            <div className={style.image} />
                            <div className={style.point}>
                                <p className={style.title}>{item.productName}</p>
                                <p className={style.price}>￥{item.price}</p>
                            </div>
                        </div>
                        <div className={style.actionList}>
                            <Button
                                size="small"
                                onClick={ScarDelete.bind(this, item.id)}
                            >
                                <Icon type="icon_delete" />删除
                            </Button>
                            <Stepper
                                max={10}
                                min={1}
                                defaultValue={1}
                                showNumber={true}
                            />
                        </div>
                    </div>
                </List.Item>
            );
        });
        return (
            <List className={style.listBox}>
                {
                    itemNode.length ? itemNode :
                        <List.Item className={style.empty}>
                            <Icon type="icon_workfile_line" />暂无数据
                        </List.Item>
                }
            </List>
        );
    }

    public render(): React.ReactNode {
        return (
            <div className={style.shoppingCarContent}>
                {this.executeListItem(this.props.list)}
                <div className={style.buttonList}>
                    <div className={style.carButton} onClick={ScarPay}>
                        <Icon type="caiwu-xianxing" />去支付
                    </div>
                    <div className={style.carButton} onClick={ScarClean}>
                        <Icon type="icon_roundclose" />清空
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state: any) => state.ShoppingCar_Models
)(ShoppingCarComponent);
