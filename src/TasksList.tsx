import type {
  PriorityColorsType,
  selectedTaskIdType,
} from "./App.tsx";
import {Task} from "./Task.tsx";

type Props = {
  tasks: any[]
  selectedTaskId: selectedTaskIdType
  priorityColors: PriorityColorsType
  onTaskSelected: (id: number) => void
}

export const TasksList = ({tasks, selectedTaskId, priorityColors, onTaskSelected}: Props) => {

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task priorityColors={priorityColors} task={task} key={task.id} selectedTaskId={selectedTaskId} onTaskSelected={onTaskSelected}/>
        ))}
      </ul>
    </>
  );
};