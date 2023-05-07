export interface TeamBoard {
  uuid: string;
  foreign_id: string;
  foreign_parent_id: string;
  name: string;
  type: string;
  url: string;
  members: Array<string> | undefined;
  foreign_origin: number;
  created_at: string;
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