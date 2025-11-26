import type {
  PriorityColorsType,
  selectedTaskIdType,
} from "./App.tsx";
import {Task} from "./Task.tsx";
import type {TaskType} from "./types/types.ts";
import {useEffect, useState} from "react";

const priorityColors: PriorityColorsType = {
  0: '#ffffff',
  1: '#ffd7b5',
  2: '#ffb38a',
  3: '#ff9248',
  4: '#ff6700',
}

// type Props = {
  // selectedTaskId: selectedTaskIdType
  // priorityColors: PriorityColorsType
  // onTaskSelected: (id: string, boardId: string) => void
// }

export const TasksList = () => {
  const [tasks, setTasks] = useState<TaskType[] | null>(null)
  const [selectedTaskId, setSelectedTaskId] = useState<selectedTaskIdType>(null)
  // const [boardId, setBoardId] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
      }
    })
      .then(res => res.json())
      .then(data => setTasks(data.data))
  }, [])

  const onTaskSelected = (id: string) => {
    setSelectedTaskId(id)
    // setSelectedTask(null)
    // setBoardId(boardId)
  }

  if (tasks === null) return <span>Loading...</span>

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task priorityColors={priorityColors} task={task} key={task.id} selectedTaskId={selectedTaskId} onTaskSelected={onTaskSelected}/>
        ))}
      </ul>
    </>
  );
};