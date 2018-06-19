import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { User } from './user';
import { Hospital } from './hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  getByZipcode(zipcode: string): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`/springData/hospitalsByAddressZip?zip=${zipcode}`);
  }

  getByRadius(lat: number, lon: number, radius: number): Observable<Hospital[]> {

    lat = Number(lat);
    lon = Number(lon);
    radius = Number(radius);

    const latDiff = radius / 69;
    const lonDiff = radius / Math.abs((Math.cos(lat) * 69));

    const minLat = lat - latDiff;
    const maxLat = lat + latDiff;
    const minLon = lon - lonDiff;
    const maxLon = lon + lonDiff;

    return new Observable<Hospital[]>((observer) => {

      this.http.get<Hospital[]>(`/springData/hospitalsByLatitudeBetweenAndLongitudeBetween?minLatititude=${
        minLat}&maxLatititude=${
        maxLat}&minLongitude=${
        minLon}&maxLongitude=${
        maxLon}`).subscribe((hospitals) => {
          observer.next(hospitals.filter((hospital) => {
            hospital.distance = this.calcDistance(lat, lon, hospital.latitude, hospital.longitude);
            return hospital.distance < radius;
          }));
          observer.complete();
        });
    });
  }

  calcDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3959; // miles
    const φ1 = Math.PI * lat1 / 180;
    const φ2 = Math.PI * lat2 / 180;
    const Δφ = Math.PI * (lat2 - lat1) / 180;
    const Δλ = Math.PI * (lon2 - lon1) / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;

    return d;
  }
}
