import { Component, OnInit, ElementRef, ApplicationRef } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


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

  constructor(private app: ApplicationRef, private el: ElementRef, private hs: HospitalService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

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

      // used to keep 'this' as object scope
      const that = this;

      // when table initializes, load rows with custom class
      $(document).on('init.dt', function () {
        $('#results-table > tbody > tr').addClass('hospitalClickable');

        $('.hospitalClickable').click(function () {
          const hospitalName = (this as any).cells[1].innerText;
          that.router.navigate(['/appointment'], { queryParams: { hospitalName: hospitalName, ailment: params.ailment } });
        });
      });

    });
  }

  filterByAilment(hospitals: Hospital[], ailment: string, maxCost: any): Hospital[] {

    return hospitals.filter((h) => {
      h.injuryCost = h.injuryCost.filter((i) => i.injury.name === ailment && (maxCost === 'undefined' || i.cost <= maxCost));
      return h.injuryCost.length;
    });
  }

  loadByZipcode(params) {
    this.hs.getByZipcode(params.zip).subscribe((hospitals) => {
      this.hospitals = this.filterByAilment(hospitals, params.ailment, params.cost);
      this.loaded = true;

      if (this.hospitals.length) {
        this.app.tick();
        this.dataTables();
      }
    });
  }

  loadByRadius(params) {
    this.hs.getByRadius(params.latitude, params.longitude, params.radius === 'undefined' ? 100 : params.radius).subscribe((hospitals) => {
      this.hospitals = this.filterByAilment(hospitals, params.ailment, params.cost);
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
      columns: cols,
      language: {
        searchPlaceholder: 'Search'
      }
    });

    const searchBar = $('#results-table_filter');
    const table = $('#results-table');
    const start = $('#resultsTableStart');

    start[0].appendChild(searchBar[0]);
    start[0].appendChild(table[0]);

    searchBar[0].style.width = '';
    searchBar[0].style.color = 'transparent';
    searchBar[0].style.textAlign = 'right';
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
