import {Task} from "./Task.tsx";
import type {GlobalTaskListItemJsonApiData} from "../types/types.ts";
import {useEffect, useState} from "react";
import {getTasks} from "../dal/api.ts";

type Props = {
  selectedTaskId: string | null
  onTaskSelect: (id: string | null, boardId: string | null) => void
}

export const TasksList = ({onTaskSelect, selectedTaskId}: Props) => {
  const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null)

  useEffect(() => {
    getTasks().then(data => setTasks(data.data))
  }, [])

  const handleTaskSelect = (id: string, boardId: string) => {
    onTaskSelect(id, boardId)
  }

  const handleResetClick = () => {
    onTaskSelect(null, null)
  }

  if (tasks === null) return <span>Loading...</span>

  return (
    <div>
      <button onClick={handleResetClick}>reset</button>
      <ul>
        {tasks.map((task) => (
          <Task task={task} key={task.id} isSelected={selectedTaskId === task.id} onTaskSelect={handleTaskSelect}/>
        ))}
      </ul>
    </div>
  );
};