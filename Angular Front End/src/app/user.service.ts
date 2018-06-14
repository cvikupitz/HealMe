import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private http: HttpClient) { console.log(this); }

  login(username: string, password: string): Observable<User> {
    const result = this.http.post<User>(`http://localhost:8081/springData/login?username=${username}&password=${password}`, '');

    result.subscribe((u) => {
      if (u != null) {
        this.user = u;
      }
    });

    return result;
  }

  register(usr: User): Observable<User> {

    const url = `http://localhost:8081/springData/register?username${usr.username ? '=' + usr.username : ''
      }&password${usr.password ? '=' + usr.password : ''
      }&email${usr.password ? '=' + usr.email : ''
      }&insurance${usr.insurance ? '=' + usr.insurance.name : ''
      }&city${usr.address ? '=' + usr.address.city : ''
      }&state${usr.address ? '=' + usr.address.state : ''
      }&zipcode${usr.address ? '=' + usr.address.zipcode : ''
      }&address${usr.address ? '=' + usr.address.address : ''}`;

    const result = this.http.post<User>(url, '');

    result.subscribe((u) => {
      if (u != null) {
        this.user = u;
      }
    });

    return result;
  }
}
