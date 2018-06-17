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

  getByRadius(lat: number, long: number, radius: number) {
    return of(null);
  }
}
