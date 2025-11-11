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
  const [boardId, setBoardId] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
      }
    })
      .then(res => res.json())
      .then(data => setTasks(data.data))
  }, [])

  useEffect(() => {
    if(!boardId || !selectedTaskId) return
    fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
      headers: {
        'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
      }
    })
      .then(res => res.json())
      .then(data => setSelectedTask(data.data))
  }, [selectedTaskId, boardId])

  const onTaskSelected = (id: string, boardId: string) => {
    setSelectedTaskId(id)
    setSelectedTask(null)
    setBoardId(boardId)
  }

  if (tasks === null) return <span>Loading...</span>

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
          {!selectedTask && !selectedTaskId && <div>Задача не выбрана</div>}
          {!selectedTask && selectedTaskId && <div>Loading...</div>}
          {/*{selectedTask && selectedTaskId && selectedTaskId !== selectedTask.id && 'Loading...'}*/}
          {selectedTask && selectedTask.id === selectedTaskId && <Detail selectedTask={selectedTask}/>}
        </div>
      </div>
    </div>
  )
}

export default App