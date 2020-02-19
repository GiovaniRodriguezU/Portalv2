import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:'hrhjfeejhrejhrejh'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status:'hrhjfeejhrejhrejh'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status:'hrhjfeejhrejhrejh'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status:'hrhjfeejhrejhrejh'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', status:'hrhjfeejhrejhrejh'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', status:'hrhjfeejhrejhrejh'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', status:'hrhjfeejhrejhrejh'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', status:'hrhjfeejhrejhrejh'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', status:'hrhjfeejhrejhrejh'},
];


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})



export class TicketListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();}
  constructor() { }

  ngOnInit() {
  }

}


