import React from 'react';
import { Bind } from 'lodash-decorators';
import EChart from '@components/ChartComponent';
import { loadChartOption } from './EchartOption';
import style from './Chart.less';

interface IChartDemoProps { }

interface IChartDemoState { }

class ChartDemoComponent extends React.Component<IChartDemoProps, IChartDemoState> {
    constructor(props: IChartDemoProps, context?: any) {
        super(props, context);
    }

    public render(): React.ReactNode {
        return (
            <div className={style.chartContent}>
                <EChart
                    style={{ height: 250 }}
                    className={style.chartPanel}
                    option={loadChartOption()}
                />
            </div>
        );
    }
}

export default ChartDemoComponent;
