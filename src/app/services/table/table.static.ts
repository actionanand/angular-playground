import { TableHeader } from '../../models/periodic-element.model';

export class TableProperties {
  private static headers: TableHeader[]; // = [{ key: 'position', value: 'No.' }, { key: 'name', value: 'Name' }];
  private static displayedColumns: string[]; // = ['position', 'name', 'weight', 'symbol'];
  private static secondDisplayedColumns: string[]; // = ['position1', 'name2', 'weight2', 'symbol2'];
  private static count: number;

  static setHeaders(headers: TableHeader[]): void {
    // TableProperties.headers = headers;
    this.headers = headers;
  }

  static setDisplayedColumns(displayedColumns: string[]): void {
    this.displayedColumns = displayedColumns;
  }

  static setSecondDisplayedColumns(secondDisplayedColumns: string[]): void {
    this.secondDisplayedColumns = secondDisplayedColumns;
  }

  static getHeaders(): TableHeader[] {
    return this.headers;
  }

  static getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  static getSecondDisplayedColumns(): string[] {
    return this.secondDisplayedColumns;
  }

  static setCount(count: number): void {
    this.count = count;
  }

  static getCount(): number {
    return this.count;
  }
}
