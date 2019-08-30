import React from 'react';
import { Bind } from 'lodash-decorators';
import { List, Modal, InputItem, Button } from 'antd-mobile';
import Icon from '@components/icon/Icon';
import { ExitLogin } from './util/LoginOut';
import Info from './info/Info';
import style from './Setting.less';

interface IEmptyProps { }

interface IEmptyState {
    showUpdate: boolean;
}

class EmptyComponent extends React.Component<IEmptyProps, IEmptyState> {
    constructor(props: IEmptyProps, context?: any) {
        super(props, context);
        this.state = {
            showUpdate: false
        };
    }

    @Bind()
    private onClick(info: any): void {
        if (info === 'exit') {
            ExitLogin();
        } else {
            this.setState({
                showUpdate: true
            });
        }
    }

    @Bind()
    private closeModal(): void {
        this.setState({
            showUpdate: false
        });
    }

    public render(): React.ReactNode {
        return (
            <div className={style.settingContent}>
                <Info />
                <List className={style.listContent}>
                    <List.Item
                        onClick={this.onClick.bind(this, 'setting')}
                    >
                        <Icon type="icon_mobilephone" />更换手机号
                    </List.Item>
                    <List.Item
                        onClick={this.onClick.bind(this, 'exit')}
                    >
                        <Icon type="logout" />退出账号
                    </List.Item>
                </List>
                <Modal
                    popup={true}
                    visible={this.state.showUpdate}
                    animationType="slide-up"
                >
                    <List>
                        <List.Item>
                            <InputItem
                                placeholder="请填写新的手机号"
                            />
                        </List.Item>
                        <List.Item>
                            <InputItem
                                placeholder="请填写验证码"
                            />
                        </List.Item>
                        <List.Item>
                            <Button>确定更换</Button>
                        </List.Item>
                        <List.Item>
                            <Button onClick={this.closeModal}>取消</Button>
                        </List.Item>
                    </List>
                </Modal>
            </div>
        );
    }
}

export default EmptyComponent;
