import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  injury = 'Broken leg';
  maxCost: number;
  zipcode = '';
  maxDistance: number;

  injuries: string[] = [
    'Broken leg',
    'Compound fracture',
    'Repatitive strain injury',
    'Burn, 1st degree',
    'Burn, 2nd degree',
    'Burn, 3rd degree'
  ];

  invalidZipcode = false;

  constructor(private router: Router) { }

  ngOnInit() {
    $('#searchForm').submit((e) => this.submit(e));
  }

  submit(e) {
    this.invalidZipcode = !(this.zipcode.length === 0 ||
      (this.zipcode.length === 5 && this.zipcode.match('[0-9][0-9][0-9][0-9][0-9]') != null));

    if (!this.invalidZipcode) {
      this.router.navigateByUrl('results');
    }
  }

}
