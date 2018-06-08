import { Component, OnInit, ElementRef } from '@angular/core';
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

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    const c = this;

    window.onload = function () {

      const cols = [];

      for (let i = 0; i < 4 + c.injuries.length; i++) {
        cols[i] = { 'orderable': (i >= 3) };
      }

      console.log(cols);

      $('#results-table').DataTable({
        paging: false,
        info: false,
        order: [[3, 'asc']],
        columns: cols
      });


      const searchBar = $('#results-table_filter');
      const table = $('#results-table');
      const start = $('#resultsTableStart');

      start[0].appendChild(searchBar[0]);
      start[0].appendChild(table[0]);

      searchBar[0].style.width = '';
      table[0].style.width = '';


    };
  }

  check(id: string, cls: string): boolean {
    return $(`#${id}`).hasClass(cls);
  }


}
