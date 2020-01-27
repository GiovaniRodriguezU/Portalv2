import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from 'src/app/core/services/communication.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-communication-list',
  templateUrl: './communication-list.component.html',
  styleUrls: ['./communication-list.component.css']
})
export class CommunicationListComponent implements OnInit {
  displayedColumns: string[] = ['key', 'uploadedBy', 'title', 'uploadedDate'];
  dataSource = this.communicationData.communication$;
  key: string;

  constructor(public communicationData: CommunicationService, public auth: AuthenticationService) { }
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    
  }

  selectKey($event) {
    this.key = $event.target.innerHTML;
    let viewsHTML = document.getElementById(this.key).innerHTML;
    const viewsCount =parseInt(viewsHTML);
    this.communicationData.addView(this.key, viewsCount);
  }
}
