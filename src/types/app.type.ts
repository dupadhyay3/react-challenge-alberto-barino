export interface IRowData {
  key: string;
  plusMinus: "+" | "-";
  val?: number;
  isDisabled: boolean;
}

export interface IRow {
  row: IRowData;
  updateRow: (key: string, field: string, value: any) => void;
  deleteRow: (id: string) => void;
}
