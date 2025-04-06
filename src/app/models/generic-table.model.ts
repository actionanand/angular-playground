export interface TableColumn {
  columnDef: string;
  header: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cell?: (arg0: any) => string;
}

export interface TableBtn {
  styleClass?: string;
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: (arg0: any) => string;
  text?: string;
  action: string;
}
