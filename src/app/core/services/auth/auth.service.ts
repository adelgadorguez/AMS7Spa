import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, of, tap } from 'rxjs';

import { UserModel } from './usermodel.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:5106/api/Auth/';

  constructor(private httpClient: HttpClient) { }

  isAuthenticated(): boolean {
    let result: boolean = false;

    result = true;

    return result;
  }

  signIn(username: string, password: string): string | null //Observable<string[]>
  {
    let result: string | null = null;
    let userModel: UserModel = new UserModel;
    
    userModel.username = username;
    userModel.password = password;
    userModel.application = 'appointmentsummaryspa';

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      })
    };
   
    this.httpClient.post<any>(this.API_URL + 'Login', userModel, httpOptions)
        .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
          alert('error: ' + error.message);
          result = error.message;
          return of();
        }))
        .subscribe(data => {
          alert('data: ' + data);
          result = data;
        });

    return result;
  }
}
