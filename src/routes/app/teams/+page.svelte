<script lang="ts">
    import TeamOverview from "$lib/components/TeamOverview.svelte";
    import type { GetBoardInterface } from "$lib/types/Boards";
    export let data: GetBoardInterface;
  </script>
  
  <div class="container-fluid">
    <h3>Team Boards</h3>
  
    { #if data.elements.length <= 0 }
      <p>seems like are not yet part of any Team Board ... </p>
      <p>If you like you can synch your <a href="/app/profile">Jira Boards here</a></p>
    { :else }
      <TeamOverview teamboards={data.elements}></TeamOverview>
    { /if }
  </div>