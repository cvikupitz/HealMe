import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/springData/login?username=${username}&password=${password}`, '');
    //return this.http.post<User>(`/springData/login?username=${username}&password=${password}`, '');
  }

  register(usr: User): Observable<User> {
    return this.http.post<User>('http://localhost:8081/springData/register', JSON.stringify(usr));
    //return this.http.post<User>('/springData/register', JSON.stringify(usr));
  }

  logout(): Observable<User> {
    return this.http.post<User>('http://localhost:8081/springData/logout', '');
    //return this.http.post<User>('/springData/logout', '');
  }
}
