import React from 'react';
import style from './Forbidden.less';

interface IForbiddenProps { }

interface IForbiddenState { }

class ForbiddenComponent extends React.Component<IForbiddenProps, IForbiddenState> {
    constructor(props: IForbiddenProps, context?: any) {
        super(props, context);
    }

    public render(): React.ReactNode {
        return (
            <div className={style.content}>
                没有权限
            </div>
        );
    }
}

export default ForbiddenComponent;
