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

  constructor(private userService: UserService, private geocodingService: GeocodingService, private router: Router) { }

  ngOnInit() {
    $('#searchForm').submit((e) => this.submit(e));
    $('#zipcodeRadio').click(() => this.toggleOther('#zipcodeInput', '#addressInput'));
    $('#addressRadio').click(() => this.toggleOther('#addressInput', '#zipcodeInput'));

    if (this.userService.user) { //user is logged in
      let userAddress = this.userService.user.address;
      $('#addressInput').val(`${userAddress.address} ${userAddress.city}, ${userAddress.state}`);
    }
  }

  submit(e) {

    this.invalidZipcode = !(this.zipcode.length === 0 ||
      (this.zipcode.length === 5 && this.zipcode.match('[0-9][0-9][0-9][0-9][0-9]') != null));

    if (!this.invalidZipcode) {
      let urlPattern = 'results';
      if ($('#zipcodeRadio').is(':checked')) {
        urlPattern += `?zip=${$('#zipcodeInput').val()}&ailment=${$('#ailment option:selected').text()}&cost=${$('#maxCostInput').val()}`;
        console.log(urlPattern);
        this.router.navigateByUrl(urlPattern);
      } else { //address search
        let lat;
        let lng;
        let address = $('#addressInput').val();
        this.geocodingService.getCoordinates(address as string).subscribe(
          res => {
            lat = (res as any).results[0].geometry.location.lat;
            lng = (res as any).results[0].geometry.location.lng;
            urlPattern += `?latitude=${lat}&longitude=${lng}&radius=${$('#radiusSlider').val()}&ailment=${$('#ailment option:selected').text()}&cost=${$('#maxCostInput').val()}`;
            console.log(urlPattern)
            this.router.navigateByUrl(urlPattern);
          }
        )
      }
    }
  }

  toggleOther(currId: String, otherId: String) {
    $(currId).prop('disabled', false)
    $(otherId).prop('disabled', true)
  }

}
