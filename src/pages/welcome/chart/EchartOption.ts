import { EChartOption } from 'echarts';
import { colorList } from '@components/ChartComponent';

export const loadChartOption = (): EChartOption => {
    return {
        color: colorList,
        legend: {
            data: ['微信朋友圈', '微信小程序', '直接访问']
        },
        grid: {
            left: '4%',
            right: '4%',
            top: '15%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                margin: 0,
                verticalAlign: 'bottom'
            },
            z: 10
        }],
        series: [{
            name: '微信朋友圈',
            type: 'line',
            stack: '总量',
            smooth: true,
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
                width: 0
            },
            data: [1220, 2132, 1101, 3134, 5990, 1230, 3210]
        }, {
            name: '微信小程序',
            type: 'line',
            stack: '总量',
            smooth: true,
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
                width: 0
            },
            data: [1220, 2182, 2191, 2234, 1290, 1330, 1310]
        }, {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            smooth: true,
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
                width: 0
            },
            data: [1320, 1332, 1301, 1334, 1390, 2330, 1320]
        }]
    };
};
