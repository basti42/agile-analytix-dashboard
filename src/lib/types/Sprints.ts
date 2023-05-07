export interface Sprint {
    uuid: string;
    foreign_id: string;
    parent_board_uuid: string;
    foreign_parent_board_id: string;
    name: string;
    goal: string;
    state: string;
    start_date: string;
    end_date: string;
    activated_date: string;
    completed_date: string;
    url: string;
    tags: Array<string>;
    velocity_distribution: Object;
    forecast_distribution: Object;
    forecast: number;
    velocity: number;
    developers: number;
    bug_count: number;
}

export interface SprintResponse {
    number_of_elements: number;
    elements: Array<Sprint>
}