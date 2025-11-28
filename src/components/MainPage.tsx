import {useState} from "react";
import {TasksList} from "./TasksList.tsx";
import {Detail} from "./Detail.tsx";

export function MainPage() {

  const [taskId, setTaskId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null)

  const handleTaskSelect = (id: string | null, boardId: string | null) => {
    setTaskId(id)
    setBoardId(boardId)
  }

  return (
    <div style={{display: 'flex', gap: '30px'}}>
      <TasksList
        selectedTaskId={taskId}
        onTaskSelect={handleTaskSelect}
      />
      <hr />
      <Detail
        selectedTaskId={taskId}
        boardId={boardId}
      />
    </div>
  )
}