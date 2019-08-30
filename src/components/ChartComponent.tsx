import React, { CSSProperties } from 'react';
import echarts, { ECharts, EChartOption } from 'echarts';
import { Bind } from 'lodash-decorators';

/**
 * Echarts 通用颜色设置项
 */
export const colorList: string[] = [
    '#0099CC',
    '#FF9900',
    '#666699',
    '#FF6666',
    '#009966',
    '#FFCC99',
    '#CC6600',
    '#CC0066',
    '#0066CC',
    '#339933'
];

export const colorList2: string[][] = [
    ['#2272A3', 'rgba(35,116,166,0.75);', 'rgba(34,114,163,0.50);', 'rgba(34,114,163,0.30)'],
    ['#BA4C6D', '#D67C7C', '#DE8181', '#EBB6A4'],
    ['#74A0A1', '#649DA3', '#73B5BD', '#82AFB5'],
    ['#F2D1B3', '#D48920', '#E09122', '#E99722']
];

/**
 * 可视化图表（继承自echarts）
 * @description style     样式设置
 * @description className 自定义样式名
 * @description option    图表配置 @see https://echarts.baidu.com/option.html
 * @description onClick   图标点击事件
 */
interface IChartProps {
    style?: CSSProperties;
    className?: string;
    option: EChartOption;
    onClick?(params: any): void;
}

interface IChartState { }

/**
 * 图表可视化组件
 */
export default class ChartComponent extends React.PureComponent<IChartProps, IChartState> {
    private chartElement: HTMLDivElement | undefined;
    private chartInstance: ECharts | undefined;

    constructor(props: IChartProps, context?: any) {
        super(props, context);
    }

    /**
     * 设置chart容器节点对象。
     * @param {HTMLDivElement} divElement
     */
    @Bind()
    private setChartContainer(divElement: HTMLDivElement): void {
        this.chartElement = divElement;
    }

    /**
     * 监听浏览器窗口变化
     */
    @Bind()
    private onResize(): void {
        this.chartInstance && this.chartInstance.resize();
    }

    /**
     * 组装ECharts
     */
    private executeECharts(props?: IChartProps): void {
        const chartProps: IChartProps = props || this.props;

        if (!this.chartInstance && this.chartElement) {
            this.chartInstance = echarts.init(this.chartElement);
            chartProps.onClick && this.chartInstance.on('click', (conf: any) => {
                chartProps.onClick && chartProps.onClick(conf);
            });
        }

        if (this.chartInstance) {
            this.chartInstance.showLoading();
            this.chartInstance.setOption(chartProps.option);
            this.chartInstance.hideLoading();
        }
    }

    public componentDidMount(): void {
        this.executeECharts();
        window.addEventListener('resize', this.onResize);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('resize', this.onResize);
        this.chartInstance && this.chartInstance.dispose();
        this.chartInstance = undefined;
    }

    public componentWillReceiveProps(nextProps: IChartProps) {
        this.executeECharts(nextProps);
    }

    public render(): React.ReactNode {
        const height: string | number = this.props.style && this.props.style.height || 200;
        return (
            <div
                style={{ height: height, ...this.props.style }}
                className={this.props.className}
                ref={this.setChartContainer}
            />
        );
    }
}
