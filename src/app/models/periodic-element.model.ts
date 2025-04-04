export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface TableHeader {
  key: string;
  value: string;
}

export interface TableResponseModel {
  columnDetails: TableHeader[];
  count: number;
  rows: PeriodicElement[];
  secondColumnDetails?: TableHeader[];
}
