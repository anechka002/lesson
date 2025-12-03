import {useEffect, useState} from "react";
import type {GlobalTaskListItemJsonApiData} from "../types/types.ts";
import {getTasks} from "../dal/api.ts";

export const useTasks = () => {
  const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null)

  useEffect(() => {
    getTasks().then(data => setTasks(data.data))
  }, [])

  return {tasks}
}