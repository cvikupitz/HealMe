import { Component, OnInit } from '@angular/core';
import { Insurance } from '../user';
import { Address } from '../user';

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

usStates = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 
'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 
'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 
'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

  username: string;
  password: string;
  email: string;
  insurance: Insurance;
  address: Address;

  constructor() { }

  ngOnInit() {
    $('#firstName').val('teest');
  }

}
