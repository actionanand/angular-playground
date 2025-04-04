import { Component, effect, viewChild } from '@angular/core';
// import { ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckbox } from '@angular/material/checkbox';

import { ELEMENT_DATA } from '../../shared/data/table.data';
import { PeriodicElement } from '../../models';

enum COLUMN_NAMES {
  position = '#',
  name = 'Name',
  weight = 'Weight',
  symbol = 'Symbol',
}
@Component({
  selector: 'app-table-pagination',
  imports: [MatTableModule, MatPaginator, MatCheckbox],
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.scss',
})
export class TablePaginationComponent {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginator = viewChild(MatPaginator);

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  columnNames: { [key: string]: string } = COLUMN_NAMES;

  readonly ElementData: PeriodicElement[] = ELEMENT_DATA.slice();

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() {
    effect(() => {
      if (this.paginator()) {
        this.dataSource.paginator = this.paginator() ?? null;
      }
    });
  }

  /*
  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator() ?? null;
    }
  }
  */

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.name));
  }

  // To add row position, if not came from the API data
  rowPosition(index: number): number {
    /*
    <td mat-cell *matCellDef="let element; let i = index;">{{ rowPosition(i) }}</td>
    - Using *matCellDef="let element = index" if the table has one-row template
    - Using *matCellDef="let element = dataIndex" if the table has multiple row templates
    */
    return (this.paginator()?.pageIndex ?? 0) * (this.paginator()?.pageSize ?? 0) + index + 1;
  }
}
