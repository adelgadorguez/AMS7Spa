import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { UserModel } from '../../models/usermodel/usermodel.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'http://localhost:5106/api/Auth/';
  jwtHelper = new JwtHelperService();
  userSuject: BehaviorSubject<UserModel>;
  user: Observable<UserModel>;
  
  constructor(
    private router: Router,
    private httpClient: HttpClient) { 
      this.userSuject = new BehaviorSubject<any>(null);
      this.user = this.userSuject.asObservable(); 
    }

  public get userValue(): UserModel {
    return this.userSuject.value;
  }

  login(userModel: UserModel): Observable<UserModel>
  {
    return this.httpClient.post<UserModel>(this.apiUrl + 'Login', userModel)
      .pipe(map(user => {
        this.userSuject.next(user);
        const decodedToken = this.jwtHelper.decodeToken(user.token);
        const expirationDate = this.jwtHelper.getTokenExpirationDate(user.token);
        const isExpired = this.jwtHelper.isTokenExpired(user.token);
        console.log('Token: ', decodedToken);
        console.log('Token Expired Date: ', expirationDate);
        console.log('Token Expired: ', isExpired);        
        return user;
      }));
  }

  isExpired(): boolean {
    if(this.userValue == null) {
      return true;
    }
    return this.jwtHelper.isTokenExpired(this.userValue.token);
  }

  logout(): void {
    this.httpClient.post(this.apiUrl + 'Logout', null)
      .subscribe();
      this.userSuject = new BehaviorSubject<any>(null);
    this.router.navigate(['/login']);
  }
}
