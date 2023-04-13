<script lang="ts">
    import type { TeamBoard } from "$lib/types/Boards";
    export let teamboards: Array<TeamBoard> = [];

</script>

{#each teamboards as teamboard}
  <details>
    <summary>{teamboard.name}</summary>
    <p>Number of Team Members: {teamboard.users.length}</p>
    <p>Average Storypoints / Sprint: {teamboard.avg_completed_stroypoints_per_sprint | 0.0}</p>
  </details>
{/each}
