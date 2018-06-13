import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() { }

  getUser(): User {
    console.log('here');
    return this.user;
  }

  login(username: string, password: string): Observable<User> {
    console.log('TODO add login connectivity');
    return of(null);
  }

}
