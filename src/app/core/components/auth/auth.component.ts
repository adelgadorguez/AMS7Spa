import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, first, map, of, tap } from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';
import { UserModel } from '../../models/usermodel/usermodel.model';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports:[ReactiveFormsModule, CommonModule]
})
export class AuthComponent implements OnInit {  
  formGroup = new FormGroup({
    username: new FormControl('', [ Validators.required/*hidden rules , Validators.minLength(3), Validators.maxLength(256)*/ ]),
    password: new FormControl('', [ Validators.required/*hidden rules , Validators.minLength(3), Validators.maxLength(256)*/ ])
  });
  loading: boolean = false;
  submitted: boolean = false;
  returnUrl: string = '';
  error: string = '';
  usernameFormControl: any = this.formGroup.get("username")
  passwordFormControl: any = this.formGroup.get("password")
  application: string = 'appointmentsummaryspa';
  token: string = '';

  constructor
  (
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.authService.userValue) {
      this.router.navigate(['/summary']);
    }
  }  
  
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/summary';
  }

  onSubmit(): void {
    let userModel: UserModel = new UserModel;

    this.loading = true;
    userModel.username = this.usernameFormControl.value;
    userModel.password = this.passwordFormControl.value;
    userModel.application = this.application;
    userModel.token = '';
    userModel.status = '';

    this.authService
      .login(userModel)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: (error) => {
          this.router.navigate(['/login']);
        },
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
