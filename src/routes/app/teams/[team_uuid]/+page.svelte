<script lang="ts">
    import InfoCard from "$lib/components/InfoCard.svelte";
    import SprintOverview from "$lib/components/SprintOverview.svelte";

    import type { TeamBoard } from "$lib/types/Boards";

    import velocityLogo from "$lib/assets/icons/velocity_light.png";
    import membersLogo from "$lib/assets/icons/members_light.png";
    import bugLogo from "$lib/assets/icons/bug_light.png";
    import type { BoardSprints } from "$lib/types/ApiTypes";
    import type { Sprint } from "$lib/types/Sprints";
    import VelocityForecastChart from "$lib/components/VelocityForecastChart.svelte";

    export let data: BoardSprints;

    const calc_average_velocity = (sprints: Array<Sprint>): string => {
        const velocity = sprints.reduce((acc, val) => acc + val.velocity, 0);
        const velocities = sprints.map((s) => s.velocity);
        return (velocity / velocities.length).toFixed(2);
    };

    const calc_average_number_of_developers = (sprints: Array<Sprint>): string => {
        const devs = sprints.map((s) => s.developers);
        const total_devs = sprints.reduce((acc, s) => acc + s.developers, 0.0);
        return (total_devs / devs.length).toFixed(2);
    };

    const calc_average_bug_count = (sprints: Array<Sprint>): string => {
        const total_bug_count = sprints.reduce((acc, s) => acc + s.bug_count, 0.0);
        return (total_bug_count / sprints.length).toFixed(2);
    }

</script>

<div class="container-fluid">
    <h3>{data.board.name || "empty"}</h3>
    
    <div class="container-fluid">
        <div class="grid">
            <InfoCard icon_path={velocityLogo} value={calc_average_velocity(data.sprints.elements)} label="Avg Velocity"></InfoCard>
            <InfoCard icon_path={membersLogo} value={calc_average_number_of_developers(data.sprints.elements)} label="Avg #Developers"></InfoCard>
            <InfoCard icon_path={bugLogo} value={calc_average_bug_count(data.sprints.elements)} label="Avg Bug Count"></InfoCard>
        </div>
    </div>

    <!-- Velocity and Forecast plot -->
    <VelocityForecastChart sprints={data.sprints.elements}></VelocityForecastChart>

    <!-- List of Sprints -->
    <SprintOverview sprintResponse={data.sprints}></SprintOverview>

</div>

<style>
    h3 { margin-top: 10px; border-bottom: thin solid var(--primary); }
</style>