import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckbox } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';

import { ELEMENT_DATA } from '../../shared/data/table.data';
import { PeriodicElement } from '../../models';

enum COLUMN_NAMES {
  position = 'No.',
  name = 'Name',
  weight = 'Weight',
  symbol = 'Symbol',
}

@Component({
  selector: 'app-split-row-table',
  imports: [MatTableModule, MatCheckbox, NgClass],
  templateUrl: './split-row-table.component.html',
  styleUrl: './split-row-table.component.scss',
})
export class SplitRowTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayed2ndColumns: string[] = ['position1', 'name2', 'weight2', 'symbol2'];
  columnNames: { [key: string]: string } = COLUMN_NAMES;
  showCheckBox = signal(true);

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

  logSelection() {
    this.selection.selected.forEach(s => console.log(s));
  }
}
