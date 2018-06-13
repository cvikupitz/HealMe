import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) { }

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
      this.userService.login(this.username, this.password).subscribe((u: User) => this.checkLogin(u));
    }
  }

  checkLogin(u: User) {
    if (u === null) {
      this.invalidCredentials = true;
    } else {
      this.router.navigateByUrl('home');
    }
  }

}
