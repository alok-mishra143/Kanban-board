import { Column } from "./types";

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
