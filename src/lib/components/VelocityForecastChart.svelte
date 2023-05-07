<script lang="ts">
    import type { Sprint } from '$lib/types/Sprints';
    import { chartable } from '$lib/plotting/echarts';
    export let sprints: Array<Sprint>;
    
    const getData = (arr: Array<Sprint>) => {
        const names = arr.map((a) => a.name);
        const velocity_values = arr.map((a) => a.velocity);
        const forecast_values = arr.map((a) => a.forecast);
        return {
            names, velocity_values, forecast_values
        };
    };
    const data = getData(sprints);

    let options = {
        xAxis: {
            type: 'category',
            data: data.names
        },
        yAxis: {
            type: 'values'
        },
        series:  [
            {
                data: data.velocity_values,
                type: 'line'
            },
            {
                data: data.forecast_values,
                type: 'line'
            }
        ]
    }
    

</script>

<div id="velocity_forecast_chart" use:chartable={options}>

</div>

<style>
    #velocity_forecast_chart {
        width: 800ox;
        height: 200px;
    }
</style>