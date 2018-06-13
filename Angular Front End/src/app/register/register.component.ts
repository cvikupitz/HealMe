import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /**
   * TODO: Note that the insurances object is populated temporarly with hard-coded data and
   * will be dynamically retreieved using DAO
   */
  insurances = [
    {
      id: 1,
      name: 'BlueCross BlueShield'
    }, 
    {
      id: 2,
      name: 'UnitedHealthcare'
    },
    {
      id: 3,
      name: 'Cigna'
    },
    {
      id: 4,
      name: 'Kaiser Permanente'
    }, 
    {
      id: 5,
      name: 'Aetna'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
