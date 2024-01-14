import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
  }}
