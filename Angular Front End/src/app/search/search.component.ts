import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GeocodingService } from '../geocoding.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  injury = 'laceration';
  maxCost: number;
  zipcode = '';
  maxDistance = 8;
  address = '';

  submitError = false;
  searchMode = 'zip';

  injuries: string[] = [
    'migraine',
    '1st degree burn',
    'common cold',
    'stomach pains',
    'laceration'
  ];

  invalidZipcode = false;

  constructor(private userService: UserService, private geocodingService: GeocodingService, private router: Router) { }

  ngOnInit() {
    $('#searchForm').submit((e) => this.submit(e));

    if (this.userService.user) {
      const userAddress = this.userService.user.address;
      this.address = `${userAddress.address} ${userAddress.city}, ${userAddress.state}`;
    }
  }

  submit(e) {

    const zipError = !(this.zipcode.length === 5 && this.zipcode.match('[0-9][0-9][0-9][0-9][0-9]') != null);

    this.submitError = (this.searchMode === 'zip' && zipError) || (this.searchMode === 'address' && !this.address);

    if (this.submitError) {
      return;
    }

    let urlPattern = 'results';

    if (this.searchMode === 'zip') {

      urlPattern += `?zip=${this.zipcode}&ailment=${$('#ailment option:selected').text()}&cost=${this.maxCost}`;
      this.router.navigateByUrl(urlPattern);
      return;
    }

    if (this.searchMode === 'address') {

      let lat;
      let lng;

      this.geocodingService.getCoordinates(this.address).subscribe((res) => {
        console.log(res);

        lat = (res as any).results[0].geometry.location.lat;
        lng = (res as any).results[0].geometry.location.lng;

        urlPattern += `?latitude=${lat
          }&longitude=${lng
          }&radius=${this.maxDistance === 16 ? 'undefined' : this.maxDistance
          }&ailment=${$('#ailment option:selected').text()
          }&cost=${this.maxCost}`;

        this.router.navigateByUrl(urlPattern);
      });
    }
  }

  searchModeChange(value: string) {
    this.searchMode = value;
  }

}
