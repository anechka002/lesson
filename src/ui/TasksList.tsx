import {Task} from "./Task.tsx";
import {useTasks} from "../bll/useTasks.ts";

type Props = {
  selectedTaskId: string | null
  onTaskSelect: (id: string | null, boardId: string | null) => void
}

export const TasksList = ({onTaskSelect, selectedTaskId}: Props) => {
  const {tasks} = useTasks()

  const handleTaskSelect = (id: string, boardId: string) => {
    onTaskSelect(id, boardId)
  }

  const handleResetClick = () => {
    onTaskSelect(null, null)
  }

  if (tasks === null) return <span>Loading...</span>

  return (
    <div>
      <button onClick={handleResetClick}>reset</button>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} isSelected={selectedTaskId === task.id} onTaskSelect={handleTaskSelect}/>
        ))}
      </ul>
    </div>
  );
};