import type {TaskDetailsData} from "../types/types.ts";
import {useEffect, useState} from "react";
import {getTask} from "../dal/api.ts";

type Props = {
  selectedTaskId: string | null
  boardId: string | null
}

export const DetailTask = ({selectedTaskId, boardId}: Props) => {
  const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null)

  useEffect(() => {
    if(!boardId || !selectedTaskId) {
      setSelectedTask(null)
      return
    }
    getTask(boardId, selectedTaskId).then(data => setSelectedTask(data.data))
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