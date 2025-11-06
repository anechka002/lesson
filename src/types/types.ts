// Optional: Enums for known status and priority values
export enum TaskStatus {
  Pending = 0,
  InProgress = 1,
  Completed = 2,
  Draft
}

// Individual task type
export type TaskType = {
  id: string;
  type: "tasks";
  attributes: {
    title: string;
    boardId: string;
    status: TaskStatus;
    priority: number;
    addedAt: string; // ISO date string
    attachmentsCount: number;
  };
}

// Meta information type
type Meta = {
  page: number;
  pageSize: number;
  totalCount: number;
  pagesCount: number;
}

// Complete response type
export type TasksResponse = {
  data: TaskType[];
  meta: Meta;
}