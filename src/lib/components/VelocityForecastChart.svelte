<script lang="ts">
    import type { Sprint } from '$lib/types/Sprints';
    import * as echarts from 'echarts';
    import { onMount } from 'svelte';
    
    
    export let sprints: Array<Sprint>;

    onMount(() => {
        const node = document.getElementById("velocity_forecast_chart");
        const names = sprints.map((a) => a.name);
        console.debug(`name = ${names}`);
        const velocity_values = sprints.map((a) => a.velocity);
        console.debug(`velocity = ${velocity_values}`);
        const forecast_values = sprints.map((a) => a.forecast);
        console.debug(`forecast = ${forecast_values}`);
        if (node != null){
            echarts.init(node).setOption(
            {
                legend: {
                    orient: 'vertical',
                    right: 10,
                    top: 'center',
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