import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { UserModel } from '../../models/usermodel/usermodel.model';
import { OkObjectResult } from '../../models/okobjectresult/ok-object-result.model';

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

  constructor
  (
    private authService: AuthService,
    private router: Router
  ) {  }  

  onSubmit() {
    let userModel: UserModel = new UserModel;

    userModel.username = this.usernameFormControl.value;
    userModel.password = this.passwordFormControl.value;
    userModel.application = 'appointmentsummaryspa';

    this.authService
        .signIn(userModel)
        .pipe(catchError((error: any, caught: Observable<string>): Observable<string> => {
          console.error(error.message);
          this.router.navigate(['/login']);
          return of();
        }))
        .subscribe((data: string) => {          
          let jsonObject: any = JSON.stringify(data)  // convert a value to the JSON notation
          let jsonParse = JSON.parse(jsonObject);     // convert a JSON notation to object
          console.log('token', jsonParse.value);          
          this.router.navigate(['/interpreter']);
        });
  }
  
  forgotPassword() {
    alert('forgot password');
  }
}
