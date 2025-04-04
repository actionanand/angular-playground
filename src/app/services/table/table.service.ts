import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

import { TableResponseModel } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private readonly url = 'https://raw.githubusercontent.com/actionanand/json-server/main/db/json/mat-table.json';
  private http = inject(HttpClient);

  getTableData(): Observable<TableResponseModel> {
    return this.http.get<{ data: TableResponseModel }>(this.url).pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Error: ', error);
        return throwError(() => new Error('Error: ' + error.message));
      }),
    );
  }
}
