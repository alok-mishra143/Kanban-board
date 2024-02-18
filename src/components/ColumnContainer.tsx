import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { delcol, updatecol } from "../lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ColumnContainer = (props: ColumnContainerprops) => {
  const [isHover, setisHover] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const { column, setcol } = props;

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-columnBackgroundColor opacity-40 border-2 border-pink-500 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-lg flex flex-col"
    >
      <div className="bg-black absolute translate-x-1/2 ">
        {isHover && (
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2">
            <span className="bg-black text-white px-2 py-1 rounded-md relative">
              Id:
              {column.id}
            </span>
          </span>
        )}
      </div>
      <div
        {...attributes}
        {...listeners}
        onClick={() => setEditMode(true)}
        className={`bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-lg rounded-b-none p-3 font-bold border-columnBackgroundColor border-4 flex items-center justify-between`}
      >
        <div className="flex gap-2">
          <div
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
            className={`flex justify-center items-center bg-columnBackgroundColor px-2 py-1 text-sm rounded-full text-gray-500`}
          >
            ...{column.id.toString().slice(-3)}
          </div>

          {editMode ? (
            <input
              className="bg-black focus:border-rose-500 border rounded outline-none px-2"
              value={column.title}
              onChange={(e) =>
                updatecol({
                  id: column.id,
                  setcol: setcol,
                  title: e.target.value,
                })
              }
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          ) : (
            column.title
          )}
        </div>

        <button
          onClick={() => delcol({ id: column.id, setcol: setcol })}
          className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rounded px-1 py-2"
        >
          <TrashIcon />
        </button>
      </div>

      {/* column task  */}

      <div className="flex flex-grow">content</div>

      {/* footer */}

      <div>footer </div>
    </div>
  );
};

export default ColumnContainer;
