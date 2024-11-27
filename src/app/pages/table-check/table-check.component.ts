import { Component } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckbox } from '@angular/material/checkbox';

import { ELEMENT_DATA } from '../../shared/data/table.data';
import { PeriodicElement } from '../../models/periodic-element.model';

enum COLUMN_NAMES {
  position = 'No.',
  name = 'Name',
  weight = 'Weight',
  symbol = 'Symbol',
}

@Component({
  selector: 'app-table-check',
  imports: [MatTableModule, MatCheckbox],
  templateUrl: './table-check.component.html',
  styleUrl: './table-check.component.scss',
})
export class TableCheckComponent {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  columnNames: { [key: string]: string } = COLUMN_NAMES;

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
