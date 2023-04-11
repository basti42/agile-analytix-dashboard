
import type { TeamBoard } from "$lib/types/Boards";
import type { PageServerLoad } from "./$types";

export async function load({fetch}) : Promise<PageServerLoad> {
    // const init: RequestInit = {method: "GET", mode: "no-cors", headers: {'Content-Type': 'application/json'}};
    const res = await fetch('http://localhost:8081/api/v1/agile-analytix/teamboards?user_uuid=c8faec1c-14e6-4354-b7e6-2f2fb82e104f');
    return await res.json();
}