import {
  type PriorityColorsType,
  TaskStatus,
  type TaskType
} from "./types/types.ts";

const priorityColors: PriorityColorsType = {
  0: '#ffffff',
  1: '#ffd7b5',
  2: '#ffb38a',
  3: '#ff9248',
  4: '#ff6700',
}

type Props = {
  task: TaskType
  onTaskSelect: (id: string, boardId: string) => void
  isSelected: boolean
}

export const Task = ({task, isSelected, onTaskSelect}: Props) => {

  const handleClick = () => {
    onTaskSelect(task.id, task.attributes.boardId)
  }

  return (
    <>
      <li style={{ color: priorityColors[task.attributes.priority], border: isSelected ? '1px solid blue' : 'none'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{ margin: 0 }}>Заголовок: </h3>
          <p onClick={handleClick}
             style={{textDecorationLine: task.attributes.status === TaskStatus.Completed ? "line-through" : "none"}}
          >
            {task.attributes.title}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Статус: </h3>
          <input type="checkbox" checked={task.attributes.status === 2} readOnly/>
        </div>
        <p>
          <b>Дата создания задачи</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}
        </p>
      </li>
    </>
  );
};