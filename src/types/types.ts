// Optional: Enums for known status and priority values
export enum TaskStatus {
  Pending = 0,
  InProgress = 1,
  Completed = 2,
  Draft
}

// Individual task type
export type GlobalTaskListItemJsonApiData = {
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

export type TaskDetailsData = {
    id: string;
    type: string;
    attributes: {
      title: string;
      order: number;
      deadline: string;
      startDate: string;
      addedAt: string;
      priority: number;
      status: TaskStatus;
      updatedAt: string;
      boardId: string;
      boardTitle: string;
      description: string;
      attachments: string[];
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
export type GlobalTaskListResponse = {
  data: GlobalTaskListItemJsonApiData[];
  meta: Meta;
}