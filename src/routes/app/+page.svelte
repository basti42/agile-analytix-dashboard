<script lang="ts">
    import TeamOverview from "$lib/components/TeamOverview.svelte";
    import type { TeamBoard, TeamOverviewObject } from "$lib/types/Boards";
    import { dataset_dev } from "svelte/internal";
    export let data: TeamOverviewObject;


</script>


<div class="container-fluid">
    <h1>Overview</h1>

    <ul>
    { #each data.boards as board }
        <li>{board.name}</li>
    { /each }
    </ul>

</div>