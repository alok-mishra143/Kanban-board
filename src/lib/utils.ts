import { Column, Task } from "../types";

export const addCol = ({ col, setcol }: addColParams) => {
  const newcol = {
    id: Date.now(),
    title: `Column ${col.length + 1}`,
  };

  setcol((prevCols: Column[]) => [...prevCols, newcol]);
};

export const delcol = ({ id, setcol }: DelcolProps) => {
  setcol((prevCols: Column[]) => prevCols.filter((col) => col.id !== id));
};

export const updatecol = ({ id, setcol, title }: UpdatecolProps) => {
  setcol((prevCols: Column[]) =>
    prevCols.map((col) => (col.id === id ? { ...col, title } : col))
  );
};

export const addTask = ({ colId, setTask, Task }: AddTaskProps) => {
  const newTask = {
    colId,
    id: Date.now(),
    title: `Task ${Task.length + 1}`,
  };

  setTask((prevTask: Task[]) => [...prevTask, newTask]);
};

export const delTask = ({ id, setTask }: DelTaskProps) => {
  setTask((prevTask: Task[]) => prevTask.filter((task) => task.id !== id));
};

export const editTask = ({ id, setTask, title }: EditTaskProps) => {
  setTask((prevTask: Task[]) =>
    prevTask.map((task) => (task.id === id ? { ...task, title } : task))
  );
};
