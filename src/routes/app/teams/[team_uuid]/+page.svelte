<script lang="ts">
    import InfoCard from "$lib/components/InfoCard.svelte";
    import SprintOverview from "$lib/components/SprintOverview.svelte";

    import type { TeamBoard } from "$lib/types/Boards";

    import velocityLogo from "$lib/assets/icons/velocity_light.png";
    import membersLogo from "$lib/assets/icons/members_light.png";
    import turnOverLogo from "$lib/assets/icons/turnovertime_light.png";
    import type { BoardSprints } from "$lib/types/ApiTypes";
    import type { Sprint } from "$lib/types/Sprints";

    export let data: BoardSprints;

    const calc_average_velocity = (sprints: Array<Sprint>): string => {
        const velocity = sprints.reduce((acc, val) => acc + val.total_storypoints_completed, 0);
        const velocities = sprints.map((s) => s.total_storypoints_completed);
        return (velocity / velocities.length).toFixed(2);
    };

    const calc_average_number_of_developers = (sprints: Array<Sprint>): string => {
        const devs = sprints.map((s) => s.total_number_of_active_developers);
        const total_devs = sprints.reduce((acc, s) => acc + s.total_number_of_active_developers, 0.0);
        return (total_devs / devs.length).toFixed(2);
    };

    const calc_average_story_overflow = (sprints: Array<Sprint>): string => {
        const overflows = sprints.map((s) => s.avg_story_overflow);
        const total_overflow = sprints.reduce((acc, s) => acc + s.avg_story_overflow, 0.0);
        return (total_overflow / overflows.length).toFixed(2);
    };

</script>

<div class="container-fluid">
    <h3>{data.board.name || "empty"}</h3>
    
    <div class="container-fluid">
        <div class="grid">
            <InfoCard icon_path={velocityLogo} value={calc_average_velocity(data.sprints.elements)} label="Avg Velocity"></InfoCard>
            <InfoCard icon_path={turnOverLogo} value={calc_average_story_overflow(data.sprints.elements)} label="Avg Overflow"></InfoCard>
            <InfoCard icon_path={membersLogo} value={calc_average_number_of_developers(data.sprints.elements)} label="Avg #Developers"></InfoCard>
        </div>
    </div>

    <SprintOverview sprintResponse={data.sprints}></SprintOverview>

</div>

<style>
    h3 { margin-top: 10px; border-bottom: thin solid var(--primary); }
</style>