import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { UserModel } from '../../models/usermodel/usermodel.model';

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
  application: string = 'appointmentsummaryspa';

  constructor
  (
    private authService: AuthService,
    private router: Router
  ) {  }  

  onSubmit() {
    let userModel: UserModel = new UserModel;

    userModel.username = this.usernameFormControl.value;
    userModel.password = this.passwordFormControl.value;
    userModel.application = this.application;
    userModel.token = '';
    userModel.status = '';

    this.authService
        .signIn(userModel)
        .pipe(catchError((error: any, caught: Observable<UserModel>): Observable<UserModel> => {
          console.error(error.message);
          this.router.navigate(['/login']);
          return of();
        }))
        .subscribe((data: UserModel) => {          
          console.log('token', data.token);          
          this.router.navigate(['/interpreter']);
        });
  }
  
  forgotPassword() {
  }

  valueToJson(value: any): any {
    return JSON.stringify(value);
  }

  jsonToObject(object: any): any {
    return JSON.parse(object);
  }
}
