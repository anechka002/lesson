import {useEffect, useState} from "react";
import type {TaskDetailsData} from "../types/types.ts";
import {getTask} from "../dal/api.ts";

export const useDetailTask = (selectedTaskId: string | null, boardId: string | null) => {
  const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null)

  useEffect(() => {
    if(!boardId || !selectedTaskId) {
      setTaskDetails(null)
      return
    }
    getTask(boardId, selectedTaskId).then(data => setTaskDetails(data.data))
  }, [selectedTaskId, boardId])

  return {taskDetails}
}