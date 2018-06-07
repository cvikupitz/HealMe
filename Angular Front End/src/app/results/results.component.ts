import { Component, OnInit } from '@angular/core';
import { Hospital, InjuryTreatment } from '../hospital';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  loaded = false;

  injuries = ['Broken Bone'];

  hospitals: Hospital[] = [
    new Hospital(1, 'Reston Hospital Center', '1850 Town Center Pkwy, Reston, VA 20190',
      1.0, [new InjuryTreatment('Broken Bone', 241)]),

    new Hospital(2, 'Reston Medical Center', '1890 Metro Center Dr, Reston, VA 20190',
      0.5, [new InjuryTreatment('Broken Bone', 234)]),

    new Hospital(3, 'Inova Fair Oaks Hospital', '3600 Joseph Siewick Dr, Fairfax, VA 22033',
      5.0, [new InjuryTreatment('Broken Bone', 199)]),

    new Hospital(4, 'Inova Loudoun Hospital', '44045 Riverside Pkwy, Leesburg, VA 20176',
      9.8, [new InjuryTreatment('Broken Bone', 313)])
  ];

  constructor() { }

  ngOnInit() {
  }

}
