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
  username: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    $('#loginForm').submit((e) => this.submit(e));
  }

  submit(e) {
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

  touched(id: string): boolean {
    return $(`#${id}`).hasClass('ng-dirty');
  }
}
