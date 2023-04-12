<script lang="ts">
  let teams = [
    { name: "Project 1" },
    { name: "Project 2" },
    { name: "Project 3" },
    { name: "Project 4" },
  ];
</script>

{#each teams as team}
  <details role="button">
    <summary>{team.name}</summary>
  </details>
{/each}
