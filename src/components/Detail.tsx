import type {TaskDetails} from "../types/types.ts";
import {useEffect, useState} from "react";

type Props = {
  selectedTaskId: string | null
  boardId: string | null
}

export const Detail = ({selectedTaskId, boardId}: Props) => {
  const [selectedTask, setSelectedTask] = useState<TaskDetails | null>(null)

  useEffect(() => {
    if(!boardId || !selectedTaskId) {
      setSelectedTask(null)
      return
    }
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