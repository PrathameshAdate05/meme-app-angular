import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemesComponent } from './memes/memes.component';
import { PJokesComponent } from './p-jokes/p-jokes.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from '../service/route-guard-service.service';

const routes: Routes = [
  {
    path: 'Memes',
    component: MemesComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'ProgrammingJokes',
    component: PJokesComponent,
    canActivate: [RouteGuardService],
  },
  { path: 'SignUp', component: SignupComponent },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService],
  },
  { path: '', redirectTo: 'Memes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
