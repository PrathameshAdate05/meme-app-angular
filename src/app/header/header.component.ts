import { Component } from '@angular/core';
import { CognitoServiceService } from '../../service/cognito-service.service';
import { HeaderService } from './header-service.service';
import { Router } from '@angular/router';
import { env } from '../../env/env';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public cognitoService: CognitoServiceService,
    private router: Router,
    private headerService: HeaderService
  ) {}

  isAuthenticated() {
    console.log('Local data => ' + localStorage.getItem(env.LOCAL_STORAGE));

    const temp = localStorage.getItem(env.LOCAL_STORAGE);

    if (temp) {
      console.log(
        'Under Local data => ' + localStorage.getItem(env.LOCAL_STORAGE)
      );

      return true;
    } else {
      return false;
    }
  }
}
