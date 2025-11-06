import type {
  PriorityColorsType,
  selectedTaskIdType,
} from "./App.tsx";

type Props = {
  task: any
  selectedTaskId: selectedTaskIdType
  priorityColors: PriorityColorsType
  onTaskSelected: (id: number) => void
}

export const Task = ({task, priorityColors, selectedTaskId, onTaskSelected}: Props) => {

  return (
    <>
      <li style={{ color: priorityColors[task.attributes.priority], border: selectedTaskId === task.id ? '1px solid blue' : 'none'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{ margin: 0 }}>Заголовок: </h3>
          <p onClick={() => {onTaskSelected(task.id)}}
             style={{textDecorationLine: task.attributes.status === 2 ? "line-through" : "none"}}
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