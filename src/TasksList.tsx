import {Task} from "./Task.tsx";
import type {TaskType} from "./types/types.ts";
import {useEffect, useState} from "react";

type Props = {
  selectedTaskId: string | null
  onTaskSelect: (id: string | null, boardId: string | null) => void
}

export const TasksList = ({onTaskSelect, selectedTaskId}: Props) => {
  const [tasks, setTasks] = useState<TaskType[] | null>(null)

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
      }
    })
      .then(res => res.json())
      .then(data => setTasks(data.data))
  }, [])

  const handleTaskSelect = (id: string, boardId: string) => {
    onTaskSelect(id, boardId)
  }

  const handleResetClick = ( ) => {
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