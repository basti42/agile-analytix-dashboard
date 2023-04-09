
import type { TeamBoard } from "$lib/types/Boards";

export async function load({fetch}) {
    // const res = await fetch("http://localhost:8081/api/v1/agile-analytix/teamboards?user_uuid=c8faec1c-14e6-4354-b7e6-2f2fb82e104f");
    // const boards: TeamBoard[] = await res.json();
    const boards: TeamBoard[] = [{"name": "PaSER Product Development"}, {"name": "AI Team"}];
    return {boards};
}