import type {TaskDetails} from "./types/types.ts";
// import {InputTitle} from "./InputTitle.tsx";
import {useEffect, useState} from "react";
// import type {selectedTaskIdType} from "./App.tsx";

// type Props = {
//   selectedTask: TaskDetails | null
// }

export const Detail = () => {
  const [selectedTask, setSelectedTask] = useState<TaskDetails | null>(null)
  // const [boardId, setBoardId] = useState<string | null>(null)
  // const [selectedTaskId, setSelectedTaskId] = useState<selectedTaskIdType>(null)
  const selectedTaskId = "4f310604-82b5-4afd-b9a4-ddf12dfac0a3"
  const boardId = "13923117-72de-4788-a7f0-4c42f162a5ab"

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

  const description = selectedTask?.attributes.description ? selectedTask.attributes.description  : 'no description'
  return (
    <div>
      <h3>Task details</h3>
      {!selectedTask && !selectedTaskId && <div>Задача не выбрана</div>}
      {!selectedTask && selectedTaskId && <div>Loading...</div>}
      {/*{selectedTask && selectedTaskId && selectedTaskId !== selectedTask.id && 'Loading...'}*/}
      {selectedTask && selectedTask.id === selectedTaskId && <>
        <ul>
          <li>title - {selectedTask?.attributes.title}</li>
          <li>boardTitle - {selectedTask?.attributes.boardTitle}</li>
          <li>description - {description}</li>
        </ul>
      </>}
    </div>
  );
};