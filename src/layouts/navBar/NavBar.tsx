import React from 'react';
import router from 'umi/router';
import { Bind } from 'lodash-decorators';
import { TabBar } from 'antd-mobile';
import Icon from '@components/icon/Icon';
import { NavBarList, INavBarInfo } from './NavBarConfig';
import style from './NavBar.less';

interface INavBarProps { }

interface INavBarState {
    selectedTab: string;
}

class NavBarComponent extends React.Component<INavBarProps, INavBarState> {
    constructor(props: INavBarProps, context?: any) {
        super(props, context);
        this.state = {
            selectedTab: location.pathname
        };
    }

    /**
     * TabBar点击触发
     * @param path
     */
    @Bind()
    private onPress(path: string): void {
        this.setState({
            selectedTab: path
        }, () => {
            router.push(this.state.selectedTab);
        });
    }

    /**
     * 组装导航
     */
    private executeTabBarItem(): React.ReactNode {
        const itemNode: React.ReactNode = NavBarList.map((item: INavBarInfo, index: number) => {
            return (
                <TabBar.Item
                    key={item.path}
                    title={item.title}
                    badge={item.badge}
                    icon={<Icon type={item.icon} className={style.itemIcon} />}
                    selectedIcon={<Icon type={item.icon} className={style.itemIconCur} />}
                    selected={this.state.selectedTab === item.path}
                    onPress={this.onPress.bind(this, item.path)}
                />
            );
        });
        return itemNode;
    }

    public render(): React.ReactNode {
        return (
            <div className={style.navBarContent}>
                <TabBar>
                    {this.executeTabBarItem()}
                </TabBar>
            </div>
        );
    }
}

export default NavBarComponent;
