import {TasksList} from "./TasksList.tsx";
import './lesson.js'
import {useEffect, useState} from "react";
import type {TaskType} from "./types/types.ts";

export type selectedTaskIdType = null | string

export type PriorityColorsType = {
  [key: number]: string;
};

const priorityColors: PriorityColorsType = {
  0: '#ffffff',
  1: '#ffd7b5',
  2: '#ffb38a',
  3: '#ff9248',
  4: '#ff6700',
}

function App() {

  const [selectedTaskId, setSelectedTaskId] = useState<selectedTaskIdType>(null)
  const [tasks, setTasks] = useState<TaskType[] | null>(null)

  console.log(tasks)
  console.log(selectedTaskId)

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
    console.log(id)
    setSelectedTaskId(id)
  }

  if (tasks === null) return <span>Loading...</span>

  if (tasks.length === 0) return <span>{'no tasks'}</span>

  return (
    <div>
      <h1>Список дел</h1>
      <button onClick={() => setSelectedTaskId(null)}>reset</button>
      <TasksList priorityColors={priorityColors} tasks={tasks} selectedTaskId={selectedTaskId} onTaskSelected={onTaskSelected}/>
    </div>
  )
}

export default App
