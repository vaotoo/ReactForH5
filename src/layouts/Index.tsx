import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import Request from '@utils/Request';
import withRouter from 'umi/withRouter';
import { IGlobalInfo } from '@globalModels/Global';
import { IGlobalInterface } from '@utils/GlobalInterface';
import { UnNeedNavBar } from './Index.conf';
import NavBar from './navBar/NavBar';
import style from './Index.less';

interface IIndexProps extends IGlobalInterface { }

interface IIndexState { }

class IndexComponent extends React.Component<IIndexProps, IIndexState> {
    constructor(props: IIndexProps, context?: any) {
        super(props, context);
    }

    /**
     * 获取全局需要的数据
     */
    private async fetchGlobalInfo(): Promise<void> {
        const result: IGlobalInfo = await Request.get('/api/globalInfo') || {};

        result.isLogin ?
            this.props.dispatch({
                type: 'GlobalInfoModels/changeGlobalInfo',
                data: result
            }) :
            router.push('login');
    }

    public componentWillMount(): void {
        this.fetchGlobalInfo();
    }

    public render(): React.ReactNode {
        return (
            <div className={style.appContent}>
                <div className={style.content}>
                    {this.props.children}
                </div>
                {UnNeedNavBar() ? <NavBar /> : ''}
            </div>
        );
    }
}

export default withRouter(connect()(IndexComponent));
