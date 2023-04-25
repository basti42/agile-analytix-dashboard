export interface Sprint {
    uuid: string;
    foreign_id: string;
    parent_board_uuid: string;
    foreign_parent_board_id: string;
    name: string;
    description: string;
    state: string;
    start_date: string;
    end_date: string;
    activated_date: string;
    completed_date: string;
    url: string;
    tags: Array<string>;
    completed_storypoints_distribution: Object;
    committed_storypoints_distribution: Object;
    total_storypoints_committed: number;
    total_storypoints_completed: number;
    total_number_of_stories_committed: number;
    total_number_of_stories_completed: number;
    total_number_of_active_developers: number;
    avg_story_overflow: number;
}

export interface SprintResponse {
    number_of_elements: number;
    elements: Array<Sprint>
}