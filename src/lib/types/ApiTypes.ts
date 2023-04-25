import type { TeamBoard } from "./Boards";
import type { SprintResponse } from "./Sprints";

export interface BoardSprints {
    board: TeamBoard;
    sprints: SprintResponse
}