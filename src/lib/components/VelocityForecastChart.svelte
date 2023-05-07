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

    onMount(() => {
        const node = document.getElementById("velocity_forecast_chart");
        const names = sprints.map((a) => a.name).reverse();
        const velocity_values = sprints.map((a) => a.velocity).reverse();
        const velocity_total = sprints.reduce((acc, s) => acc + s.velocity, 0.0);
        const velocity_mean = velocity_total / velocity_values.length;
        const forecast_values = sprints.map((a) => a.forecast).reverse();
        const forecast_total = sprints.reduce((acc, s) => acc + s.forecast, 0.0);
        const forecast_mean = forecast_total / forecast_values.length;
        if (node != null){
            echarts.init(node).setOption(
            {
                legend: {
                    orient: 'horizontal',
                    left: 'center',
                    top: 0,
                    data: ["Velocity", "Forecast"]
                },
                xAxis: {
                    type: 'category',
                    data: names
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
                    {
                        name: "Forecast",
                        data: forecast_values,
                        type: 'line'
                    }
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
        width: 90%;
        height: 40vh;
    }
</style>