export interface TeamBoard {
  uuid: string;
  foreign_id: string;
  foreign_parent_id: string;
  name: string;
  type: string;
  url: string;
  tags: Array<string>;
  users: Array<string>;
  avg_completed_stroypoints_per_sprint: number;
  avg_completed_stories_per_sprint: number;
  avg_story_turn_over_time: number;
  avg_completion_time: number;
  avg_story_overflow: number;
  foreign_origin: number;
}

export interface GetBoardInterface {
  number_of_elements: number;
  elements: Array<TeamBoard>
}

export interface TeamOverviewObject {
  board_elements: GetBoardInterface;
}

export interface BoardWithSprintsOverview {
  board: TeamBoard;
  sprints: Array<string>;
}