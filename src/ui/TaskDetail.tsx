import {useDetailTask} from "../bll/useDetailTask.ts";
import style from './TaskDetail.module.css'

type Props = {
  selectedTaskId: string | null
  boardId: string | null
}

export const TaskDetail = ({selectedTaskId, boardId}: Props) => {
  const {taskDetails} = useDetailTask(selectedTaskId, boardId)

  const description = taskDetails?.attributes.description ? taskDetails.attributes.description  : 'no description'

  return (
    <div className={style.task}>
      <h3>Task details</h3>
      {!taskDetails && !selectedTaskId && <div>Задача не выбрана</div>}
      {!taskDetails && selectedTaskId && <div>Loading...</div>}
      {/*{selectedTask && selectedTaskId && selectedTaskId !== selectedTask.id && 'Loading...'}*/}
      {taskDetails && taskDetails.id === selectedTaskId && <>
        <ul>
          <li>title - {taskDetails?.attributes.title}</li>
          <li>boardTitle - {taskDetails?.attributes.boardTitle}</li>
          <li>description - {description}</li>
        </ul>
      </>}
    </div>
  );
};