import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  injury = '';
  maxCost: number;
  zipcode = '';
  maxDistance: number;

  invalidZipcode = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.invalidZipcode = !(this.zipcode.length === 0 ||
      (this.zipcode.length === 5 && this.zipcode.match('[0-9][0-9][0-9][0-9][0-9]') != null));


    if (!this.invalidZipcode) {
      this.router.navigateByUrl('results');
    }
  }

}
