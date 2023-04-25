<script lang="ts">
    import type { SprintResponse } from "$lib/types/Sprints";
    import { onMount } from "svelte";
    import { stringify } from "uuid";

    let sprintResponse: SprintResponse;
    let loading = true;

    export let boardUUID: string;

    onMount(async () => {
        const res = await fetch("http://localhost:8082/api/v1/agile-analytix/sprints&board_uuid" + boardUUID);
        sprintResponse = await res.json();
        console.log(sprintResponse);
        loading = false;
    });
</script>

<div class="container-fluid">

    { #each sprintResponse.elements as sprint }
        <li>{sprint.name}</li>    
    { :else }
        <p>loading data ... </p>
    { /each }


</div>