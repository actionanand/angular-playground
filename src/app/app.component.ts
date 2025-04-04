import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { WrapComponent } from './components/wrap/wrap.component';
import { TableService } from './services/table/table.service';
import { TableProperties } from './services/table/table.static';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, WrapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private tableServ = inject(TableService);

  ngOnInit(): void {
    this.tableServ.getTableData().subscribe({
      next: data => {
        console.log('Data fetched for static methods: ', data);
        TableProperties.setHeaders(data.columnDetails);
        TableProperties.setDisplayedColumns(data.columnDetails.map(column => column.key)); // ['select', 'position', 'name', 'weight', 'symbol']
        TableProperties.setCount(data.count);
      },
      error: error => console.error('Error, while fetching for static methods: ', error),
    });
  }
}
