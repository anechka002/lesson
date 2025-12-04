import type {GlobalTaskListItemJsonApiData, TaskDetailsData} from "../types/types.ts";

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if (!apiKey) return undefined

  return {
    'api-key': apiKey
  }
}

export const getTasks = () => {
  const promise: Promise<{data: GlobalTaskListItemJsonApiData[]}> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
    headers: prepareHeaders()
  }).then(res => res.json())
  return promise
}

export const getTask = (boardId: string, id: string) => {
  const promise: Promise<{data: TaskDetailsData}> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${id}`, {
    headers: prepareHeaders()
  }).then(res => res.json())
  return promise
}