import type {GlobalTaskListItemJsonApiData, TaskDetailsData} from "../types/types.ts";

export const getTasks = () => {
  const promise: Promise<{data: GlobalTaskListItemJsonApiData[]}> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
    headers: {
      'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
    }
  }).then(res => res.json())
  return promise
}

export const getTask = (boardId: string, id: string) => {
  const promise: Promise<{data: TaskDetailsData}> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${id}`, {
    headers: {
      'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
    }
  }).then(res => res.json())
  return promise
}