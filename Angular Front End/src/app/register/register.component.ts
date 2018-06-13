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
    { id: 1, name: 'BlueCross BlueShield' },
    { id: 2, name: 'UnitedHealthcare' },
    { id: 3, name: 'Cigna' },
    { id: 4, name: 'Kaiser Permanente' },
    { id: 5, name: 'Aetna' },
    { id: 6, name: 'MetLife' },
    { id: 7, name: 'Unitrin' },
    { id: 8, name: 'Assurant' },
    { id: 9, name: 'American Family' },
    { id: 10, name: 'Amerigroup' },
    { id: 11, name: 'Molina' },
    { id: 12, name: 'Well Care' },
    { id: 13, name: 'Well Point' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
