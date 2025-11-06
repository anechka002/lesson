import {TasksList} from "./TasksList.tsx";
import './lesson.ts'
import {useEffect, useState} from "react";

// export type TasksType = {
//   id: number
//   title: string
//   isDone: boolean
//   priority: number
// }

export type selectedTaskIdType = null | number

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

  // const tasks: TasksType[] = [
  //   { id: 1, title: "Купить продукты на неделю", isDone: false, priority: 2 },
  //   { id: 2, title: "Полить цветы", isDone: true, priority: 1 },
  //   { id: 3, title: "Сходить на тренировку", isDone: false, priority: 0, },
  //   { id: 4, title: "Срочно отправить рабочий отчет", isDone: true, priority: 3, },
  //   { id: 5, title: "Заплатить за коммунальные услуги", isDone: false, priority: 4, },
  // ]

function App() {

  const [selectedTaskId, setSelectedTaskId] = useState<selectedTaskIdType>(null)
  const [tasks, setTasks] = useState(null)

  console.log(tasks)

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': 'e89a9a5a-8ec8-4868-866c-0e822747b9ad'
      }
    })
      .then(res => res.json())
      .then(data => setTasks(data.data))
  }, [])

  const onTaskSelected = (id: number) => {
    setSelectedTaskId(id)
  }

  if(tasks === null) return <span>Loading...</span>

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
