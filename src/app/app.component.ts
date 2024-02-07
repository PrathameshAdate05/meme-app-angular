import { Component } from '@angular/core';
import { env } from '../env/env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'meme-app';

  // ngOnInit(){
  //   localStorage.setItem(env.LOCAL_STORAGE, '');
  // }
}
