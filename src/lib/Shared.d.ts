interface addColParams {
  col: {
    id: string | number | Date;
    title: string;
  }[];

  setcol: Dispatch<SetStateAction<Column[]>>;
}

interface ColumnContainerprops {
  column: Column;
  setcol: Dispatch<SetStateAction<Column[]>>;
  setTask: Dispatch<SetStateAction<Column[]>>;
  Task: Task[];
}

interface DelcolProps {
  id: string | number | Date;
  setcol: Dispatch<SetStateAction<Column[]>>;
}

interface UpdatecolProps {
  id: string | number | Date;
  setcol: Dispatch<SetStateAction<Column[]>>;
  title: string;
}

interface AddTaskProps {
  colId: string | number | Date;
  Task: Task[];
  setTask: Dispatch<SetStateAction<Task[]>>;
}

interface TaskContainerprops {
  task: Task;
  setTask: Dispatch<SetStateAction<Task[]>>;
}

interface DelTaskProps {
  id: string | number | Date;
  setTask: Dispatch<SetStateAction<Column[]>>;
}

interface EditTaskProps {
  id: string | number | Date;
  setTask: Dispatch<SetStateAction<Task[]>>;
  title: string;
}
