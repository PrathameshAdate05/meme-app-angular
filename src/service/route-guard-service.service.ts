import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CognitoServiceService } from './cognito-service.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    private cognitoService: CognitoServiceService,
    private router: Router
  ) {}
  canActivate(): Promise<boolean> {
    return this.cognitoService.isAuthenticated().then((authenticated) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/Login']);
        return false;
      }
    });
  }
}
