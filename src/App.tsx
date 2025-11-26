import {TasksList} from "./TasksList.tsx";
import './lesson.js'
import {useEffect, useState} from "react";
// import type {TaskDetails} from "./types/types.ts";
// import {Detail} from "./Detail.tsx";
import {InputTitle} from './InputTitle.tsx'

export type selectedTaskIdType = null | string

export type PriorityColorsType = {
  [key: number]: string;
};

// const priorityColors: PriorityColorsType = {
//   0: '#ffffff',
//   1: '#ffd7b5',
//   2: '#ffb38a',
//   3: '#ff9248',
//   4: '#ff6700',
// }

function App() {

  const [selectedTaskId, setSelectedTaskId] = useState<selectedTaskIdType>(null)
  // const [selectedTask, setSelectedTask] = useState<TaskDetails | null>(null)
  // const [boardId, setBoardId] = useState<string | null>(null)



  // const onTaskSelected = (id: string, boardId: string) => {
  //   setSelectedTaskId(id)
  //   setSelectedTask(null)
  //   setBoardId(boardId)
  // }

  return (
    <div>
      <InputTitle/>
      <h1>Список дел</h1>
      <button onClick={() => {
        setSelectedTaskId(null)
        // setSelectedTask(null)
      }}>reset</button>
      <div style={{display: 'flex', gap: '30px'}}>
        <TasksList
          // priorityColors={priorityColors}
          // selectedTaskId={selectedTaskId}
          // onTaskSelected={onTaskSelected}
        />
        <hr/>
        {/*<TasksList*/}
        {/*  priorityColors={priorityColors}*/}
        {/*  selectedTaskId={selectedTaskId}*/}
        {/*  onTaskSelected={onTaskSelected}*/}
        {/*/>*/}
        {/*<div>*/}
        {/*  <h3>Task details</h3>*/}
        {/*  {!selectedTask && !selectedTaskId && <div>Задача не выбрана</div>}*/}
        {/*  {!selectedTask && selectedTaskId && <div>Loading...</div>}*/}
        {/*  /!*{selectedTask && selectedTaskId && selectedTaskId !== selectedTask.id && 'Loading...'}*!/*/}
        {/*  {selectedTask && selectedTask.id === selectedTaskId && <Detail/>}*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default App