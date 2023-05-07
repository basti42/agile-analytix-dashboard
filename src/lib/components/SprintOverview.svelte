<script lang="ts">
    import type { SprintResponse } from "$lib/types/Sprints";

    export let sprintResponse: SprintResponse;

</script>

<div class="container-fluid">

    <table>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Velocity/Forecast</th>
                <th scope="col">#Developers</th>
                <th scope="col">#Bugs</th>
            </tr>
        </thead>
        <tbody>
            { #each sprintResponse.elements as {name, velocity, forecast, developers, bug_count}, i }
            <tr>
                <th scope="row">{sprintResponse.number_of_elements - i}</th>
                <td>{name}</td>
                <td>{velocity} / <small>{forecast}</small></td>
                <td>{developers}</td>
                <td>{bug_count}</td>
            </tr>    
        { /each }
        </tbody>
    </table>

</div>

<style>
    small { filter: brightness(70%); }
</style>