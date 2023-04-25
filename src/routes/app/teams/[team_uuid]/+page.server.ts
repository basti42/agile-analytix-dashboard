import type { TeamBoard } from "$lib/types/Boards";
import type { PageServerLoad } from "./$types";

export async function load({ fetch, params }): Promise<PageServerLoad> {
    console.log("Board UUID: " + params.team_uuid);
    const res = await fetch(
      "http://localhost:8081/api/v1/agile-analytix/teamboards/"+params.team_uuid
    );    
    return await res.json();
  }