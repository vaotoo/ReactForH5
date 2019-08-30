import React from 'react';
import Welcome from './welcome/Welcome';
import style from './Index.less';

interface IIndexProps { }

interface IIndexState { }

class IndexComponent extends React.Component<IIndexProps, IIndexState> {
    constructor(props: IIndexProps, context?: any) {
        super(props, context);
    }

    public render(): React.ReactNode {
        return (
            <div className={style.indexContent}>
                <Welcome />
            </div>
        );
    }
}

export default IndexComponent;
