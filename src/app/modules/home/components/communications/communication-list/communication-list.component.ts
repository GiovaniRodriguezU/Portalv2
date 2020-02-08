import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/core/services/communication.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateCommunicationComponent } from '../create-communication/create-communication.component';


@Component({
  selector: 'app-communication-list',
  templateUrl: './communication-list.component.html',
  styleUrls: ['./communication-list.component.css']
})
export class CommunicationListComponent implements OnInit {
  key: string;

  constructor(public communicationData: CommunicationService, public auth: AuthenticationService, public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog() {
    let dialogRef = this.dialog.open(CreateCommunicationComponent, {
      width: '400px',
    });
  }

  selectKey($event) {
    this.key = $event.target.innerHTML;
    let viewsHTML = document.getElementById(this.key).innerHTML;
    const viewsCount = parseInt(viewsHTML);
    this.communicationData.addView(this.key, viewsCount);
  }
}
