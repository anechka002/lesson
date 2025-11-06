import type {
  PriorityColorsType,
  selectedTaskIdType,
} from "./App.tsx";
import {Task} from "./Task.tsx";
import type {TaskType} from "./types/types.ts";

type Props = {
  tasks: TaskType[]
  selectedTaskId: selectedTaskIdType
  priorityColors: PriorityColorsType
  onTaskSelected: (id: string) => void
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