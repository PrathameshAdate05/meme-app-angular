import { Component } from '@angular/core';
import { CognitoServiceService } from '../../service/cognito-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '../header/header-service.service';
import { env } from '../../env/env';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  constructor(
    private cognitoService: CognitoServiceService,
    private router: Router,
    private toast: ToastrService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.cognitoService.signOut();
    this.toast.success('Logged Out Successfully!', 'Success');
    localStorage.setItem(env.LOCAL_STORAGE, '');
    localStorage.clear();
    this.router.navigate(['Login']);
  }
}
