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
}

interface DelcolProps {
  id: string | number | Date;
  setcol: Dispatch<SetStateAction<Column[]>>;
}
