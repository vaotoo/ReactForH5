import React from 'react';
import Banner from './banner/Banner';
import Quick from './quick/Quick';
import Product from './product/Product';
import Chart from './chart/Chart';
import style from './Welcome.less';

interface IWelcomeProps { }

interface IWelcomeState { }

class WelcomeComponent extends React.Component<IWelcomeProps, IWelcomeState> {
    constructor(props: IWelcomeProps, context?: any) {
        super(props, context);
    }

    public render(): React.ReactNode {
        return (
            <div className={style.welcomeContent}>
                <Banner />
                <Quick />
                <Chart />
                <Product />
            </div>
        );
    }
}

export default WelcomeComponent;
