import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  email: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.email = this.userService.user ? this.userService.user.email : 'null';
  }

}
