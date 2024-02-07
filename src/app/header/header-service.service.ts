import { Injectable } from '@angular/core';
import { CognitoServiceService } from '../../service/cognito-service.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private cognitoService: CognitoServiceService) {}

  isAuth: boolean = false;

  isAuthenticated(): any {
    const data = this.cognitoService.isAuthenticated().then((data) => {
      console.log('Value = ' + data);
      return data;
    });

    return data;
  }
}
