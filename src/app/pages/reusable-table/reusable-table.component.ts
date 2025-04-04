import { Component } from '@angular/core';

import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { TableBtn, TableColumn, UserData } from '../../models';
import { createNewUserData } from '../../shared/data/user.data';

@Component({
  selector: 'app-reusable-table',
  imports: [GenericTableComponent],
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.scss',
})
export class ReusableTableComponent {
  introText = 'Button actions and payloads come here in textual form';
  columns: TableColumn[]; // this will define what you pass over to the table
  buttons: TableBtn[]; // this will define what you pass over to the table
  data: UserData[]; // this is example data but you can use any object to pass to the table
  totalVolume: number = 0; // this is an example field used to show how you can access filtered data from the table
  totalRides: number = 0;
  footer: string = ''; // in this example I'm using a dynamic footer which changes with the filtered data

  constructor() {
    // Create 100 userdata objects
    this.data = Array.from({ length: 100 }, (_, k) => createNewUserData(k + 1));

    // build the colums; columnDef: attribute name; header: column title; cell: row text
    // note that the cell attribute is the same as the columnDef attribute
    this.columns = [
      { columnDef: 'date', header: 'Datum', cell: (element: UserData) => `${element.date.toLocaleDateString()}` },
      { columnDef: 'name', header: 'Name', cell: (element: UserData) => `${element.name}` },
      { columnDef: 'volume', header: 'Volume', cell: (element: UserData) => `${element.volume} m³` },
      { columnDef: 'rides', header: 'Trips', cell: (element: UserData) => `${element.rides}` },
      { columnDef: 'material', header: 'Material', cell: (element: UserData) => `${element.material}` },
    ];

    // build the buttons; styleClass: button style; icon: which material icon should be used; payload: what value from the object should be returned; action: what name should the action have
    this.buttons = [
      {
        styleClass: 'btn btn-success px-2',
        icon: 'note_add',
        payload: (element: UserData) => `${element.id}`,
        action: 'add',
      },
      {
        styleClass: 'btn btn-primary px-2',
        icon: 'build',
        payload: (element: UserData) => `${element.id}`,
        action: 'edit',
      },
    ];

    this.data.forEach(user => {
      this.totalVolume = this.totalVolume + parseInt(user.volume || '0');
      this.totalRides = this.totalRides + user.rides;
    });
    this.footer = `Total volume: ${this.totalVolume}m³ / trips: ${this.totalRides}`;
  }

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

  // Here we can get the action and payload back from the table
  buttonClick(result: string[]) {
    this.introText = `action: ${result[0]}, payload ${result[1]}`;
  }
}
