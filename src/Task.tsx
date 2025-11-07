import type {
  PriorityColorsType,
  selectedTaskIdType,
} from "./App.tsx";
import {TaskStatus, type TaskType} from "./types/types.ts";

type Props = {
  task: TaskType
  selectedTaskId: selectedTaskIdType
  priorityColors: PriorityColorsType
  onTaskSelected: (id: string, boardId: string) => void
}

export const Task = ({task, priorityColors, selectedTaskId, onTaskSelected}: Props) => {

  return (
    <>
      <li style={{ color: priorityColors[task.attributes.priority], border: selectedTaskId === task.id ? '1px solid blue' : 'none'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{ margin: 0 }}>Заголовок: </h3>
          <p onClick={() => {
            // debugger
            onTaskSelected(task.id, task.attributes.boardId)
          }}
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