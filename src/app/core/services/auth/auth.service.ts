import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, of, tap } from 'rxjs';

import { UserModel } from '../../models/usermodel/usermodel.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://localhost:5106/api/Auth/';

  constructor(private httpClient: HttpClient) { }

  isAuthenticated(): boolean {
    let result: boolean = false;

    result = true;

    return result;
  }

  signIn(userModel: UserModel): Observable<string | null>
  {
    console.log('userModel', userModel)
    return this.httpClient.post<string | null>(this.endpoint + 'Login', userModel);
  }
}
