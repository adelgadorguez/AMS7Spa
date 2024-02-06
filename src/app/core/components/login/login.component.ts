import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LoginModel } from '../../models/login.model';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[ReactiveFormsModule, CommonModule]
})

export class LoginComponent {
  formGroup = new FormGroup({
    username: new FormControl('', [ Validators.required/*hidden rules , Validators.minLength(3), Validators.maxLength(256)*/ ]),
    password: new FormControl('', [ Validators.required/*hidden rules , Validators.minLength(3), Validators.maxLength(256)*/ ])
  });

  usernameFormControl: any = this.formGroup.get("username")
  passwordFormControl: any = this.formGroup.get("password")
  loginModel: LoginModel;

  constructor
  (
    private authService: AuthService,
    private router: Router
  )
  {
    this.loginModel = new LoginModel()
  }  

  onSubmit() {
    let result: boolean = false;
    
    this.loginModel.username = this.usernameFormControl.value;
    this.loginModel.password = this.passwordFormControl.value;
    
    result = this.authService.signIn(this.loginModel);

    if (result)
    {
      this.router.navigate(['home'])
    }

    return result;
  }
  
  forgotPassword() {
    alert('forgot password');
  }
}
