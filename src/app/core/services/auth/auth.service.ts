import { Injectable } from '@angular/core';
import { LoginModel } from '../../models/login.model'

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

  signIn(loginModel: LoginModel): boolean 
  {
    let result: boolean = false;

    result = true;

    return result;
  }}
