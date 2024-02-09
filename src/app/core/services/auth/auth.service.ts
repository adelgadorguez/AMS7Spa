import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';

import { UserModel } from '../../models/usermodel/usermodel.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://localhost:5106/api/Auth/';
  userSuject: BehaviorSubject<any>;
  user: Observable<UserModel>;
  refeshTokenTimeout: any;

  constructor(private httpClient: HttpClient, private router: Router) { 
    this.userSuject = new BehaviorSubject<UserModel | null>(null);
    this.user = this.userSuject.asObservable(); 
  }

  userValue(): UserModel {
    return this.userSuject.value;
  }

  login(userModel: UserModel): Observable<UserModel>
  {
    return this.httpClient.post<UserModel>(this.endpoint + 'Login', userModel)
      .pipe(map(user => {
        this.userSuject.next(user);
        return user;
      }));
  }

  isExpired(): boolean {
    let result: boolean = false;

    if (this.userValue == null) {
      result = true;
    }

    return result;
  }

  logout(): void {
    this.httpClient.post(this.endpoint + 'Logout', null)
      .subscribe();
    this.userSuject.next(null);
    this.router.navigate(['/login']);
  }
}
