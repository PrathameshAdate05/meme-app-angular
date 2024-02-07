import { Component } from '@angular/core';
import {
  CognitoServiceService,
  User,
} from '../../service/cognito-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '../header/header-service.service';
import { env } from '../../env/env';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: User;

  constructor(
    private router: Router,
    private cognitoService: CognitoServiceService,
    private toast: ToastrService,
    private headerService: HeaderService
  ) {
    this.user = {} as User;
  }

  login() {
    this.cognitoService
      .signIn(this.user)
      .then((data) => {
        console.log('Response data -> ' + data);
        console.log('Login Success');
        this.toast.success('Logged In Successfully!', 'Success');
        localStorage.setItem(env.LOCAL_STORAGE, 'auth'); // store data in local storage

        this.router.navigate(['Memes']);
      })
      .catch((err) => {
        console.log(err + 'Login Error');
        this.toast.error('Invalid Email or Password', 'Error');
      });
  }
}
