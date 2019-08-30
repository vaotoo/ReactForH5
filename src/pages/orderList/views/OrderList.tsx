import React from 'react';
import { connect } from 'dva';
import { Models } from 'rmc-tabs';
import { Bind } from 'lodash-decorators';
import { List, Tabs, Button } from 'antd-mobile';
import Icon from '@components/icon/Icon';
import { IOrderListInfo } from '../models/OrderList';
import { OrderRebuy } from './util/OrderRebuy';
import { OrderDelete } from './util/OrderDelete';
import { OrderEvaluate } from './util/OrderEvaluate';
import style from './OrderList.less';

interface IOrderListProps extends IOrderListInfo { }

interface IOrderListState {
    tabsKey: string;
}

class ListComponent extends React.Component<IOrderListProps, IOrderListState> {
    constructor(props: IOrderListProps, context?: any) {
        super(props, context);
        this.state = {
            tabsKey: '0'
        };
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
                                <div className={style.status}>完成</div>
                                <p className={style.title}>{item.productName}</p>
                                <p className={style.price}>￥{item.price}</p>
                                <p className={style.time}>{item.createTime}</p>
                            </div>
                        </div>
                        <div className={style.actionList}>
                            <Button
                                size="small"
                                onClick={OrderEvaluate.bind(this, item.id)}
                            >
                                <Icon type="icon_sms" />评价
                            </Button>
                            <Button
                                size="small"
                                onClick={OrderDelete.bind(this, item.id)}
                            >
                                <Icon type="icon_delete" />删除
                            </Button>
                            <Button
                                size="small"
                                onClick={OrderRebuy.bind(this, item.id)}
                            >
                                <Icon type="peizaizhuangche-xianxing" />再次购买
                            </Button>
                        </div>
                    </div>
                </List.Item>
            );
        });
        return (
            <List>
                {
                    itemNode.length ? itemNode :
                        <List.Item className={style.empty}>
                            <Icon type="icon_workfile_line" />暂无数据
                        </List.Item>
                }
            </List>
        );
    }

    @Bind()
    private onChange(tab: Models.TabData, index: number): void {
        this.setState({
            tabsKey: tab.key as string
        });
    }

    public render(): React.ReactNode {
        const key = this.state.tabsKey;
        const tabs = [{
            title: '全部', key: '0'
        }, {
            title: '待付款', key: '1'
        }, {
            title: '已完成', key: '2'
        }, {
            title: '已取消', key: '3'
        }];

        return (
            <div className={style.orderListContent}>
                <Tabs
                    tabs={tabs}
                    onChange={this.onChange}
                />
                <div
                    className={style.listBox}
                    style={{ display: key === '0' ? 'block' : 'none' }}
                >
                    {this.executeListItem(this.props.list)}
                </div>
                <div
                    className={style.listBox}
                    style={{ display: key === '1' ? 'block' : 'none' }}
                >
                    {this.executeListItem([])}
                </div>
                <div
                    className={style.listBox}
                    style={{ display: key === '2' ? 'block' : 'none' }}
                >
                    {this.executeListItem([])}
                </div>
                <div
                    className={style.listBox}
                    style={{ display: key === '3' ? 'block' : 'none' }}
                >
                    {this.executeListItem([])}
                </div>
            </div>
        );
    }
}

export default connect(
    (state: any) => state.OrderList_Models
)(ListComponent);
