import { Component, OnInit, ElementRef } from '@angular/core';
import { Hospital, InjuryTreatment } from '../hospital';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  loaded = false;

  injuries = ['Broken Bone'];

  hospitals: Hospital[] = [
  ];

  constructor(private el: ElementRef, private hs: HospitalService) { }

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
