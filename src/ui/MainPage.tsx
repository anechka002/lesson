import {TasksList} from "./TasksList.tsx";
import {TaskDetail} from "./TaskDetail.tsx";
import {useTaskSelection} from "../bll/useTaskSelection.ts";
import styles from "./MainPage.module.css";

export function MainPage() {

  const {setTaskId, taskId, boardId, setBoardId} = useTaskSelection()

  const handleTaskSelect = (id: string | null, boardId: string | null) => {
    setTaskId(id)
    setBoardId(boardId)
  }

  return (
    <div className={styles.container}>
      <TasksList
        selectedTaskId={taskId}
        onTaskSelect={handleTaskSelect}
      />
      <hr />
      <TaskDetail
        selectedTaskId={taskId}
        boardId={boardId}
      />
    </div>
  )
}