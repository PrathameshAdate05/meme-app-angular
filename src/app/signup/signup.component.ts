import { Component } from '@angular/core';
import {
  CognitoServiceService,
  User,
} from '../../service/cognito-service.service';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isConfirmed: boolean;
  user: User;

  constructor(
    private router: Router,
    private cognitoService: CognitoServiceService,
    private toast: ToastrService
  ) {
    this.isConfirmed = false;
    this.user = {} as User;
  }

  public signUp(): void {
    this.cognitoService
      .signUp(this.user)
      .then(() => {
        this.isConfirmed = true;
      })
      .catch((err) => {
        console.log(err + 'Error in signup..');
        this.toast.error(err, 'Error', {
          timeOut: 5000,
        });
      });
  }

  public confirmSignUp(): void {
    this.cognitoService
      .confirmSignUp(this.user)
      .then(() => {
        console.log('Register success');
        this.toast.success('Registration Successfull!', 'Success');
        this.router.navigate(['Login']);
      })
      .catch(() => {
        console.log('Error in signup..');
      });
  }
}
