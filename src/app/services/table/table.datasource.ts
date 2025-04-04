import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { inject } from '@angular/core';

import { BehaviorSubject, catchError, finalize, map, Observable, of } from 'rxjs';

import { PeriodicElement, TableResponseModel } from '../../models';
import { TableService } from './table.service';

export class TableDataSource implements DataSource<PeriodicElement> {
  private tableData = new BehaviorSubject<PeriodicElement[]>([]);
  private isLoading = new BehaviorSubject<boolean>(false);

  isLoading$ = this.isLoading.asObservable();

  private tableServ = inject(TableService);

  loadTableData() {
    this.isLoading.next(true);

    this.tableServ
      .getTableData()
      .pipe(
        map((data: TableResponseModel) => data.rows),
        catchError(() => of([])),
        finalize(() => this.isLoading.next(false)),
      )
      .subscribe((rows: PeriodicElement[]) => {
        this.tableData.next(rows);
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connect(collectionViewer: CollectionViewer): Observable<PeriodicElement[]> {
    return this.tableData.asObservable();
  }

  disconnect(): void {
    this.tableData.complete();
    this.isLoading.complete();
  }
}
