import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentials = false;
  attempted = false;
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
    $('#loginForm').submit((e) => this.submit(e));
  }

  submit(e) {
    this.attempted = true;

    if (!this.username) {
      $('#username').addClass('is-invalid');
    } else {
      $('#username').removeClass('is-invalid');
    }

    if (!this.password) {
      $('#password').addClass('is-invalid');
    } else {
      $('#password').removeClass('is-invalid');
    }

    if (this.username && this.password) {
      this.invalidCredentials = true;
    }
  }

}
