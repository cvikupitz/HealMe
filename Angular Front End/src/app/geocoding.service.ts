import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  constructor(private http: HttpClient) { }


  getCoordinates(address: String) {
    const apiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAOqeSQTTe1VL_1YYUzIeXTlPjD1pfihW8`;
    return this.http.get(apiURL);
  }
}
