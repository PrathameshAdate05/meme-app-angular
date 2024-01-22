import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemesComponent } from './memes/memes.component';
import { PJokesComponent } from './p-jokes/p-jokes.component';

const routes: Routes = [
  { path: 'Memes', component: MemesComponent },
  { path: 'ProgrammingJokes', component: PJokesComponent },
  { path: '', redirectTo: 'Memes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
