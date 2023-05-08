<script lang="ts">
    import type { Sprint } from '$lib/types/Sprints';
    import * as echarts from 'echarts';
    import { onMount } from 'svelte';
    
    export let sprints: Array<Sprint>;

    function getStandardDeviation (array: Array<number>) : number {
        const n = array.length
        const mean = array.reduce((a, b) => a + b) / n
        return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    }

    function sma(arr: Array<number>, window_size: number) : Array<number> {
        let res: Array<number> = [];
        for (let i = window_size; i < arr.length; i ++){
            res.push(arr.slice(i-window_size, i).reduce((acc, element) => acc + element, 0.0) / window_size);
        }
        // for (let j=0; j<window_size; j++) { res.unshift(null); }
        return res;
    }

    function calc_sma(vel: Array<number>, fore: Array<number>, names: Array<string>) {
        let sma_velocity = sma(vel, 3);
        let sma_forecast = sma(fore, 3);
        let sma_labels = names.slice(3, names.length);
        return {sma_velocity, sma_forecast, sma_labels};
    }

    onMount(() => {
        const node = document.getElementById("velocity_forecast_chart");
        const names = sprints.map((a) => a.name).reverse();
        const velocity_values = sprints.map((a) => a.velocity).reverse();
        const forecast_values = sprints.map((a) => a.forecast).reverse();

        const sma_result = calc_sma(velocity_values, forecast_values, names);

        if (node != null){
            echarts.init(node).setOption(
            {
                grid: {
                    containLabel: true,
                },
                legend: {
                    orient: 'horizontal',
                    left: 'center',
                    top: 0,
                    data: ["Velocity", "Forecast"]
                },
                xAxis: {
                    type: 'category',
                    data: names,
                    axisLabel: {
                        show: true,
                        interval: 0,
                        rotate: 45
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: "Velocity",
                        data: velocity_values,
                        type: 'line'
                    },
                    // {
                    //     name: 'Velocity SMA',
                    //     data: sma_result.sma_velocity,
                    //     type: 'line',
                    //     linestyle: {color: '#515151'}

                    // },
                    {
                        name: "Forecast",
                        data: forecast_values,
                        type: 'line'
                    },
                    // {
                    //     name: "Forecast SMA",
                    //     data: sma_result.sma_forecast,
                    //     type: 'line',
                    //     linestyle: {color: '#515151'}
                    // }
                ]
            });
        } else {
            console.log("Could not get plot html element");
        }
    });    

</script>

<div id="velocity_forecast_chart"></div>

<style>
    #velocity_forecast_chart {
        width: 100%;
        height: 50vh;
    }
</style>