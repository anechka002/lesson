import {TasksList} from "./TasksList.tsx";
import {DetailTask} from "./DetailTask.tsx";
import {useTaskSelection} from "../bll/useTaskSelection.ts";

export function MainPage() {

  const {setTaskId, taskId, boardId, setBoardId} = useTaskSelection()

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
      <DetailTask
        selectedTaskId={taskId}
        boardId={boardId}
      />
    </div>
  )
}