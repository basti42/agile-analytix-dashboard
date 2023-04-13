<script lang="ts">
  import TeamOverview from "$lib/components/TeamOverview.svelte";
  import type { GetBoardInterface } from "$lib/types/Boards";
  export let data: GetBoardInterface;
</script>

<div class="container-fluid">
  <h1>Overview</h1>

  <ul>
    {#each data.elements as board}
      <li>{board.name}</li>
    {/each}
  </ul>
</div>
