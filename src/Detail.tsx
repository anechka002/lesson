import type {TaskDetails} from "./types/types.ts";

type Props = {
  selectedTask: TaskDetails | null
}

export const Detail = ({selectedTask}: Props) => {

  const description = selectedTask?.attributes.description ? selectedTask.attributes.description  : 'no description'
  return (
    <>
      <ul>
        <li>title - {selectedTask?.attributes.title}</li>
        <li>boardTitle - {selectedTask?.attributes.boardTitle}</li>
        <li>description - {description}</li>
      </ul>
    </>
  );
};