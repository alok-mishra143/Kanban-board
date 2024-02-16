import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column } from "../lib/types";
import { addCol } from "../lib/utils";
import ColumnContainer from "./ColumnContainer";

const KanbanBoard = () => {
  const [Columns, setColumns] = useState<Column[]>([]);

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {Columns.map((col) => (
            <div key={col.id}>
              <ColumnContainer column={col} setcol={setColumns} />
            </div>
          ))}
        </div>
        <button
          onClick={() => addCol({ col: Columns, setcol: setColumns })}
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-2 flex gap-2"
        >
          <PlusIcon />
          Add column
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;
