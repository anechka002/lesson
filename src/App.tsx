import {TasksList} from "./TasksList.tsx";
import './lesson.js'
import {useEffect, useState} from "react";
import type {TaskDetails, TaskType} from "./types/types.ts";
import {Detail} from "./Detail.tsx";

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
  const [selectedTask, setSelectedTask] = useState<TaskDetails | null>(null)
  const [tasks, setTasks] = useState<TaskType[] | null>(null)

  console.log(tasks)
  // console.log(selectedTaskId)
  // console.log('selectedTask', selectedTask)

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
      }
    })
      .then(res => res.json())
      .then(data => setTasks(data.data))
  }, [])

  const onTaskSelected = (id: string, boardId: string) => {
    setSelectedTaskId(id)
    setSelectedTask(null)
    fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${id}`, {
      headers: {
        'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
      }
    })
      .then(res => res.json())
      .then(data => setSelectedTask(data.data))
  }

  if (tasks === null) return <span>Loading...</span>

  if (tasks.length === 0) return <span>{'no tasks'}</span>

  return (
    <div>
      <h1>Список дел</h1>
      <button onClick={() => {
        setSelectedTaskId(null)
        setSelectedTask(null)
      }}>reset</button>
      <div style={{display: 'flex', gap: '30px'}}>
        <TasksList
          priorityColors={priorityColors}
          tasks={tasks}
          selectedTaskId={selectedTaskId}
          onTaskSelected={onTaskSelected}
        />
        <div>
          <h3>Task details</h3>
          {selectedTaskId === null && <div>Задача не выбрана</div>}
          {selectedTaskId !== null && selectedTask === null && <div>Loading...</div>}
          {selectedTask !== null && <Detail selectedTask={selectedTask}/>}
        </div>
      </div>
    </div>
  )
}

export default App
