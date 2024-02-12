import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  apiUrl: string = 'http://localhost:5106/api/Auth/';
  constructor(
    private authServise: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authServise.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = req.url.startsWith(this.apiUrl);
    if (isLoggedIn && isApiUrl) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${ user.token }`}
      })
    }
    return next.handle(req);
  }
}
