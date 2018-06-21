import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit, AfterViewInit {

  times: string[] = [
    '9:00 AM', '10:00 AM',
    '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM'
  ];


  selectedTime = '3:00 PM';

  hospitalName: string;
  ailment: string;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private titlecasePipe: TitleCasePipe) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.hospitalName = params.hospitalName;
      this.ailment = params.ailment;
      if (this.userService.user) {
        console.log(`The selected hospital was ${params.hospitalName}. The user email is ${this.userService.user.email}`);
      } else {
        console.log('not logged in');
      }
    });
  }

  ngAfterViewInit() {
    $('#submitSuccess').click(() => {
      this.router.navigateByUrl('confirmation');



      $.ajax({
        url: `http://107.23.145.43:8888/appointment?email=${this.userService.user.email
          }&hospital=${this.titlecasePipe.transform(this.hospitalName)
          }&time=${$('#timeSelect :selected').text()}`,
        method: 'GET',
        success: console.log,
        error: console.log
      });
    });
  }

}


