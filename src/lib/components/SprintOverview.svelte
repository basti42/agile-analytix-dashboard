<script lang="ts">
    import type { SprintResponse } from "$lib/types/Sprints";

    export let sprintResponse: SprintResponse;

</script>

<div class="container-fluid">

    <table role="grid">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Velocity</th>
                <th scope="col">#Developers</th>
            </tr>
        </thead>
        <tbody>
            { #each sprintResponse.elements as {name, velocity, developers}, i }
            <tr>
                <th scope="row">{sprintResponse.number_of_elements - i}</th>
                <td>{name}</td>
                <td>{velocity}</td>
                <td>{developers}</td>
            </tr>    
        { /each }
        </tbody>
    </table>


</div>