import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { ELEMENT_DATA } from '../../shared/data/table.data';

enum COLUMN_NAMES {
  position = 'No.',
  name = 'Name',
  weight = 'Weight',
  symbol = 'Symbol',
}

@Component({
  selector: 'app-split-row-table',
  imports: [MatTableModule],
  templateUrl: './split-row-table.component.html',
  styleUrl: './split-row-table.component.scss',
})
export class SplitRowTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  columnNames: { [key: string]: string } = COLUMN_NAMES;

  dataSource = ELEMENT_DATA.slice(0, 7);
}
