import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from '../../../models/login/login.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel: LoginModel;

  constructor
  (
    private authService: AuthService,
    private router: Router
  )
  {
    this.loginModel = new LoginModel()
  }  

  signIn() 
  {
    let result: boolean = false;

    result = this.authService.signIn(this.loginModel.email, this.loginModel.password);

    if (result)
    {
      this.router.navigate(['home'])
    }

    return result;
  }    
}
