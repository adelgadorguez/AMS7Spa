import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[ReactiveFormsModule, CommonModule]
})

export class HomeComponent {
  homeFormGroup = new FormGroup({
    firstName: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(256) ]),
    lastName: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(256) ])
  });

  firstNameFormControl: any = this.homeFormGroup.get("firstName")
  lastNameFormControl: any = this.homeFormGroup.get("lastName")

  onSubmit() {
    console.warn("firstNameFormControl",this.firstNameFormControl);
    console.warn("lastNameFormControl",this.lastNameFormControl);
    console.warn("homeFormGroup", this.homeFormGroup);
  }

  reset() {
    this.homeFormGroup.reset();
  }
}
