<script lang="ts">
  import TeamOverview from "$lib/components/TeamOverview.svelte";
  import type { GetBoardInterface } from "$lib/types/Boards";
  export let data: GetBoardInterface;
</script>

<div class="container-fluid">
  <h1>Overview</h1>

  { #if data.elements.length > 0 }
    <TeamOverview teamboards={data.elements}></TeamOverview>
  { :else }
    <p>seems like are not yet part of any Team Board ... </p>
    <p>If you like you can synch your <a href="/app/profile">Jira Boards here</a></p>
  { /if }
</div>
