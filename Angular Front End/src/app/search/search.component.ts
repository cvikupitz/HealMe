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

  geolocation: Position;
  geolocationString: string;

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

    navigator.geolocation.getCurrentPosition((p) => {
      this.geolocation = p;
      this.geolocationString = `gps(${p.coords.latitude.toFixed(2)}, ${p.coords.longitude.toFixed(2)})`;
      console.log(p);
    });

    if (this.userService.user) {
      const userAddress = this.userService.user.address;
      this.address = `${userAddress.address} ${userAddress.city}, ${userAddress.state}`;
    }
  }

  submit(e) {

    const zipError = !(this.zipcode.length === 5 && this.zipcode.match('[0-9][0-9][0-9][0-9][0-9]') != null);

    this.submitError = (this.searchMode === 'zip' && zipError) || (this.searchMode === 'address' && !this.address && !this.geolocation);

    if (this.submitError) {
      return;
    }

    if (this.searchMode === 'zip') {
      const urlPattern = `results?zip=${this.zipcode}&ailment=${$('#ailment option:selected').text()}&cost=${this.maxCost}`;
      this.router.navigateByUrl(urlPattern);
      return;
    }

    if (this.searchMode === 'address') {

      if (this.geolocation) {
        this.searchByRadius(this.geolocation.coords.latitude, this.geolocation.coords.longitude);
      } else {
        this.geocodingService.getCoordinates(this.address).subscribe((res) => {
          console.log(res);

          const lat = (res as any).results[0].geometry.location.lat;
          const lng = (res as any).results[0].geometry.location.lng;

          this.searchByRadius(lat, lng);
        });
      }
    }
  }

  searchByRadius(lat, lng) {
    const urlPattern = `results?latitude=${lat
      }&longitude=${lng
      }&radius=${this.maxDistance === 16 ? 'undefined' : this.maxDistance
      }&ailment=${$('#ailment option:selected').text()
      }&cost=${this.maxCost}`;

    this.router.navigateByUrl(urlPattern);
  }

  searchModeChange(value: string) {
    this.searchMode = value;
  }

}
