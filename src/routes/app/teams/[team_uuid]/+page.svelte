<script lang="ts">
    import InfoCard from "$lib/components/InfoCard.svelte";
    import SprintOverview from "$lib/components/SprintOverview.svelte";

    import type { TeamBoard } from "$lib/types/Boards";

    import velocityLogo from "$lib/assets/icons/velocity_light.png";
    import membersLogo from "$lib/assets/icons/members_light.png";
    import turnOverLogo from "$lib/assets/icons/turnovertime_light.png";

    export let data: TeamBoard;
</script>

<div class="container-fluid">
    <h3>{data.name || "empty"}</h3>
    
    <div class="container-fluid">
        <div class="grid">
            <InfoCard icon_path={velocityLogo} value={data.avg_completed_stroypoints_per_sprint || 42} label="Avg Velocity"></InfoCard>
            <InfoCard icon_path={membersLogo} value={data.users.length || 7} label="# Members"></InfoCard>
            <InfoCard icon_path={turnOverLogo} value={data.avg_story_turn_over_time || 3600} label="Turn-Over-Time"></InfoCard>
        </div>
    </div>

    <!-- <SprintOverview boardUUID={data.uuid}></SprintOverview> -->

</div>

<style>
    h3 { margin-top: 10px; border-bottom: thin solid var(--primary); }
</style>