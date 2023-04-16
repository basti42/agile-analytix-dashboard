<script lang="ts">
    import type { TeamBoard } from "$lib/types/Boards";
    export let board: TeamBoard;
</script>

<div class="container-fluid">
    <h3>{board.name}</h3>
    
    <div class="container-fluid">
        <div class="grid">
            <p>{board.type}</p>
        </div>
    </div>

</div>