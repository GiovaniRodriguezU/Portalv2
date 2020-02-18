import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  domain = '@sykes.com'
  loading = false;
  error: string;

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
  }

  signIn(form: NgForm) {
    this.loading = true;
    this.error = null;
    const {user, password} = form.value;

    try {
    this.auth.signIn(user + this.domain, password);
    } catch (error) {
      this.error = error.message;
    };
  }

}
