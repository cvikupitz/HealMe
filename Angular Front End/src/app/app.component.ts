import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { User } from './user';
import { UserService } from './user.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.user = null;
    this.router.navigateByUrl('home');
  }

}
