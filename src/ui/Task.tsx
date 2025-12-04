import {
  TaskStatus,
  type GlobalTaskListItemJsonApiData
} from "../types/types.ts";
import style from './Task.module.css'
import clsx from "clsx"

type Props = {
  task: GlobalTaskListItemJsonApiData
  onTaskSelect: (id: string, boardId: string) => void
  isSelected: boolean
}

export const Task = ({task, isSelected, onTaskSelect}: Props) => {

  const handleClick = () => {
    onTaskSelect(task.id, task.attributes.boardId)
  }

  const titleClassName = clsx({
    [style.title]: task.attributes.status === TaskStatus.Completed,
  })

  const taskClassName = clsx({
    [style.task]: true,
    [style.default]: !isSelected,
    [style.selected]: isSelected,
    [style.highPriority]: task.attributes.status === TaskStatus.Completed,
  })

  return (
    <div className={taskClassName}>
        <p onClick={handleClick}>
          <b>Заголовок: </b><span className={titleClassName}>{task.attributes.title}</span>
        </p>
        <b>Статус: </b>
        <input type="checkbox" checked={task.attributes.status === 2} readOnly/>
      <p>
        <b>Дата создания задачи</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}
      </p>
    </div>
  );
};
