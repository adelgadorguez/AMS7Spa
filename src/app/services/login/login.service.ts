import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isAuthenticated(): boolean {
    let result: boolean = false;

    result = true;

    return result;
  }

  signIn(email: string, password: string): boolean 
  {
    let result: boolean = false;

    result = true;

    return result;
  }
}
