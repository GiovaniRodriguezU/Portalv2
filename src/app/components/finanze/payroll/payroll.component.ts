import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ImgSrcDirective } from '@angular/flex-layout';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Descuento: string;
  fechadetimbre: string;
  pdf: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , Descuento:'200', fechadetimbre:'20/02/2020', pdf:'descargar'},
  
];


@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Descuento','fechadetimbre','pdf'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}