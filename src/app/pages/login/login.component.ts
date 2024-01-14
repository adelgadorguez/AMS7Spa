import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login/login.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginModel: LoginModel;
  
  constructor
  (
    private loginService: LoginService,
    private router: Router
  )
  {
    this.loginModel = new LoginModel()
  }
  
  signIn() 
  {
    let result: boolean = false;

    result = this.loginService.signIn(this.loginModel.email, this.loginModel.password);

    if (result)
    {
      this.router.navigate(['dashboard'])
    }

    return result;
  }  
}
