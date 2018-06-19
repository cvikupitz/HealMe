import { Component, OnInit, ElementRef, ApplicationRef } from '@angular/core';
import { Hospital } from '../hospital';
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

  distanceMagnitude: number;

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

  filterByAilment(hospitals: Hospital[], ailment: string): Hospital[] {

    return hospitals.filter((h) => {
      h.injuryCost = h.injuryCost.filter((i) => i.injury.name === ailment);
      return h.injuryCost.length;
    });
  }

  loadByZipcode(params) {
    this.hs.getByZipcode(params.zip).subscribe((hospitals) => {
      this.hospitals = this.filterByAilment(hospitals, params.ailment);
      this.loaded = true;

      if (this.hospitals.length) {
        this.app.tick();
        this.dataTables();
      }
    });
  }

  loadByRadius(params) {
    this.hs.getByRadius(params.latitude, params.longitude, params.radius === 'undefined' ? 100 : params.radius).subscribe((hospitals) => {
      this.hospitals = this.filterByAilment(hospitals, params.ailment);
      this.loaded = true;

      this.hospitals.forEach((hospital) => {
        const magnitude = Math.trunc(Math.log10(hospital.distance));
        if (!this.distanceMagnitude || magnitude > this.distanceMagnitude) {
          this.distanceMagnitude = magnitude;
        }
      });

      if (this.hospitals.length) {
        this.app.tick();
        this.dataTables();
      }
    });
  }

  dataTables() {

    const cols = [];

    const columns = 3 + this.injuries.length + (this.mode === 'radius' ? 1 : 0);

    for (let i = 0; i < columns; i++) {
      cols[i] = { 'orderable': (i >= 3) };
    }

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
  }


  check(id: string, cls: string): boolean {
    return $(`#${id}`).hasClass(cls);
  }

  formatDistance(distance): string {
    distance = Number(distance);

    return String(`${String(Math.trunc(distance)).padStart(this.distanceMagnitude + 1, '0')}.${Math.trunc((distance % 1) * 10)}`);
  }

}
