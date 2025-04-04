import { Component } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckbox } from '@angular/material/checkbox';

import { ELEMENT_DATA } from '../../shared/data/table.data';
import { PeriodicElement, TableHeader } from '../../models';
import { TableProperties } from '../../services/table/table.static';

@Component({
  selector: 'app-table-check',
  imports: [MatTableModule, MatCheckbox],
  templateUrl: './table-check.component.html',
  styleUrl: './table-check.component.scss',
})
export class TableCheckComponent {
  // using legacy static methods to get share global static data
  displayedColumns: string[] = TableProperties.getDisplayedColumns(); // ['select', 'position', 'name', 'weight', 'symbol'];
  headers: TableHeader[] = TableProperties.getHeaders(); // [{ key: 'position', value: 'No.' }, { key: 'name', value: 'Name' }];

  readonly ElementData: PeriodicElement[] = ELEMENT_DATA.slice(0, 10);

  dataSource = new MatTableDataSource<PeriodicElement>(this.ElementData);
  selection = new SelectionModel<PeriodicElement>(true, []);

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
}
