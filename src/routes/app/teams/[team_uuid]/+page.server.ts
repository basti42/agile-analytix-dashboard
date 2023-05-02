import type { TeamBoard } from "$lib/types/Boards";
import type { PageServerLoad } from "./$types";

export async function load({ fetch, params }) {
    console.log("Board UUID: " + params.team_uuid);
    const board_response = await fetch(
      "http://localhost:8081/api/v1/agile-analytix/teamboards/"+params.team_uuid
    );
    const sprint_response = await fetch(
      "http://localhost:8082/api/v1/agile-analytix/sprints?board_uuid="+params.team_uuid+"&limit=10"
    );
    return {
      board: await board_response.json(),
      sprints: await sprint_response.json()
    }
  }