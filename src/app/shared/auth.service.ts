import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn() {
     let user = localStorage.getItem('currentUser');
     return user;
  }

  logout() {
    localStorage.removeItem('currentUser')
  }
}
