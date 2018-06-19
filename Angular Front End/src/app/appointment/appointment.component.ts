import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  times: string[] = [
    "9:00 AM", "10:00 AM",
    "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM",
    "3:00 PM", "4:00 PM"
  ];

  hospitalName: string;
  injury: string;

  constructor() { }

  ngOnInit() {
  }

}
