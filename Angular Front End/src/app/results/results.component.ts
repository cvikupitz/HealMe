import { Component, OnInit, ElementRef, ApplicationRef } from '@angular/core';
import { Hospital, InjuryTreatment } from '../hospital';
import { HospitalService } from '../hospital.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  loaded = false;

  injuries = [];

  mode: string;

  hospitals: Hospital[] = [
  ];

  constructor(private app: ApplicationRef, private el: ElementRef, private hs: HospitalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.injuries.push(params.ailment);

      if (params.zip) {
        this.mode = 'zip';
        this.loadByZipcode(params);
      }

      if (params.radius) {
        this.mode = 'radius';
        this.loadByRadius(params);
      }

    });
  }

  loadByZipcode(params) {
    this.hs.getByZipcode(params.zip).subscribe((hospitals) => {
      this.hospitals = hospitals;
      this.loaded = true;
      this.app.tick();
      this.dataTables();
    });
  }

  loadByRadius(params) {
    this.hs.getByRadius(params.latitude, params.longitude, params.radius === 'undefined' ? 100 : params.radius).subscribe((hospitals) => {
      this.hospitals = hospitals;
      this.loaded = true;
      this.app.tick();
      this.dataTables();
    });
  }

  dataTables() {

    if (this.mode === 'radius') {
      const cols = [];

      for (let i = 0; i < 3 + this.injuries.length; i++) {
        cols[i] = { 'orderable': (i === 3) };
      }

      $('#results-table').DataTable({
        paging: false,
        info: false,
        order: [[3, 'asc']],
        columns: cols
      });
    } else {
      $('#results-table').DataTable({
        paging: false,
        info: false,
        ordering: false,
      });
    }


    const searchBar = $('#results-table_filter');
    const table = $('#results-table');
    const start = $('#resultsTableStart');

    start[0].appendChild(searchBar[0]);
    start[0].appendChild(table[0]);

    searchBar[0].style.width = '';
    table[0].style.width = '';
  }


  check(id: string, cls: string): boolean {
    return $(`#${id}`).hasClass(cls);
  }

  formatDistance(distance): string {
    distance = Number(distance);

    return String(`${Math.trunc(distance)}.${Math.trunc((distance % 1) * 10)}`);
  }

}
