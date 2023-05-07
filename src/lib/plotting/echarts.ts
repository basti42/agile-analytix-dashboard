import * as charts from 'echarts';

export function chartable(node: HTMLElement, options: charts.EChartsCoreOption) {
    const chart = charts.init(node);
    chart.setOption(options);
}