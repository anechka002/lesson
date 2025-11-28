export type PriorityColorsType = {
  [key: number]: string;
};

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

export type TaskDetails = {
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
      attachments: any[]; // или более специфичный тип, если известна структура вложений
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