import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { TableBtn, TableColumn, UserData } from '../../models';
import { createNewUserData } from '../../shared/data/user.data';

@Component({
  selector: 'app-reusable-table',
  imports: [GenericTableComponent, NgIf, MatIconModule, MatButtonModule, NgClass],
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.scss',
})
export class ReusableTableComponent {
  introText = 'Button actions and payloads come here in textual form';
  columns: TableColumn[]; // this will define what you pass over to the table
  columns2: TableColumn[];
  buttons: TableBtn[]; // this will define what you pass over to the table
  data: UserData[]; // this is example data but you can use any object to pass to the table
  totalVolume: number = 0; // this is an example field used to show how you can access filtered data from the table
  totalRides: number = 0;
  footer: string = ''; // in this example I'm using a dynamic footer which changes with the filtered data

  inputColumns = ['date', 'name', 'volume', 'rides', 'material'];

  constructor() {
    // Create 100 userdata objects
    this.data = Array.from({ length: 100 }, (_, k) => createNewUserData(k + 1));

    this.columns2 = this.generateColumns(this.inputColumns);
    this.columns = this.generateColumns(this.inputColumns);

    this.columns.push({
      columnDef: 'actions',
      header: 'Actions',
    });

    this.buttons = [
      {
        icon: 'visibility',
        text: 'View',
        payload: (element: UserData) => `${element.id}`, // Payload function
        action: 'view', // Action name
      },
      {
        styleClass: 'green-button',
        icon: 'edit',
        text: 'Edit',
        payload: (element: UserData) => `${element.id}`,
        action: 'edit',
      },
      {
        styleClass: 'red-button',
        icon: 'delete',
        text: 'Delete',
        payload: (element: UserData) => `${element.id}`,
        action: 'delete',
      },
    ];

    this.data.forEach(user => {
      this.totalVolume = this.totalVolume + parseInt(user.volume || '0');
      this.totalRides = this.totalRides + user.rides;
    });

    this.footer = `Total volume: ${this.totalVolume}m³ / trips: ${this.totalRides}`;
  }

  private generateColumns = (inputColumns: string[]): TableColumn[] => {
    return inputColumns.map(column => {
      return {
        columnDef: column,
        header: column.charAt(0).toUpperCase() + column.slice(1), // Capitalize the first letter for the header
        cell: (element: UserData) => {
          switch (column) {
            case 'date':
              return `${element.date.toLocaleDateString()}`;
            case 'volume':
              return `${element.volume} m³`;
            default:
              return `${element[column]}`; // Default case for other fields
          }
        },
      };
    });
  };

  // Use the filtered data from the table and modify the footer accordingly
  applyFilter(filteredData: UserData[]) {
    this.totalVolume = 0;
    this.totalRides = 0;
    filteredData.forEach(user => {
      this.totalVolume = this.totalVolume + parseInt(user.volume || '0');
      this.totalRides = this.totalRides + user.rides;
    });
    this.footer = `Total volume: ${this.totalVolume}m³ / trips: ${this.totalRides}`;
  }

  /* // data format
  this.columns = [
    { columnDef: 'date',     header: 'Date',    cell: (element: UserData) => `${element.date.toLocaleDateString()}` },
    { columnDef: 'name',     header: 'Name',     cell: (element: UserData) => `${element.name}` },
    { columnDef: 'volume',   header: 'Volume',   cell: (element: UserData) => `${element.volume} m³` },
    { columnDef: 'action',   header: 'Action',
  ];
  */
}
