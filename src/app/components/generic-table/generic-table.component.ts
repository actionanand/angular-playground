/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgClass, NgFor, NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckbox } from '@angular/material/checkbox';

import { TableColumn } from '../../models';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-generic-table',
  imports: [
    NgIf,
    NgFor,
    NgStyle,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgTemplateOutlet,
    FormsModule,
    MatCheckbox,
    NgClass,
    MatButtonModule,
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnChanges {
  @Input() tableColumnTemplate!: TemplateRef<any>;
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() filter: boolean = false;
  @Input() filterPlaceholder: string = 'Filter';
  @Input() footer: string = '';
  @Input() pagination: number[] = [];
  @Input() pageSize: number = 25;
  @Input() tableMinWidth: number = 500;
  @Input() nonSortableColumns: string[] = [];

  @Output() filteredData = new EventEmitter<any[]>();

  dataSource!: MatTableDataSource<any>;
  selection!: SelectionModel<any>;
  displayedColumns!: string[];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  input: string = '';

  // Map to store disabled states
  columnDisabledMap: { [key: string]: boolean } = {};

  isSortingDisabled(column: string): boolean {
    if (this.nonSortableColumns) {
      return this.nonSortableColumns.includes(column);
    }
    return false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      if (changes['data']) {
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.displayedColumns = [...this.columns.map(c => c.columnDef)];
        this.selection = new SelectionModel<any>(true, []);

        console.log('data : ', this.data);
        console.log('Datasource : ', this.dataSource);
        console.log('column : ', this.columns);
      }
    }

    if (changes['columns'] || changes['nonSortableColumns']) {
      this.computeDisabledStates();
    }
  }

  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filteredData.emit(this.dataSource.filteredData);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    this.dataSource.sort = this.sort;
  }

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
    this.selection.clear();
  }

  private computeDisabledStates(): void {
    this.columnDisabledMap = {};
    this.columns.forEach(column => {
      this.columnDisabledMap[column.columnDef] = this.nonSortableColumns.includes(column.columnDef);
    });

    /*
    // Alternatively, using reduce to create the map
    this.columnDisabledMap = this.columns.reduce((map, column) => {
      map[column.columnDef] = this.nonSortableColumns.includes(column.columnDef);
      return map;
    }, {} as { [key: string]: boolean });
    */
  }
}
