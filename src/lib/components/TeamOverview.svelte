<script lang="ts">
    import type { TeamBoard } from "$lib/types/Boards";
    export let teamboards: Array<TeamBoard> = [];

</script>

<ul>
  {#each teamboards as teamboard}
    <li>
      <a href='/app/teams/{teamboard.uuid}'>
        <div class="container-fluid">
          <h5>{teamboard.name}</h5>
          <div class="grid">
            <span><small>Team Origin: </small>{teamboard.foreign_origin}</span>
          </div>
        </div>  
      </a>
    </li>
  {/each}
</ul>

<style>
  li { list-style: none; }
  li > a > div { 
    border-left: 4px solid var(--primary); 
    border-bottom: 1px solid var(--primary);
  }
  li > a > div:hover {
    filter: brightness(150%); 
  }
  a { text-decoration: none; }
  a:hover {text-decoration: none;}
</style>