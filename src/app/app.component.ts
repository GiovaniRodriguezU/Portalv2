import { Component } from '@angular/core';
import { AuthenticationService } from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthenticationService) { }

  signOut(){
    this.auth.signOut();
  }
}
