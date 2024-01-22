import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-p-jokes',
  templateUrl: './p-jokes.component.html',
  styleUrl: './p-jokes.component.scss',
})
export class PJokesComponent {
  constructor(private http: HttpClient) {}

  setup: string = '';
  punchline: string = '';
  jokeUrl: string =
    'https://official-joke-api.appspot.com/jokes/programming/random';

  ngOnInit() {
    this.loadJoke();
  }

  loadJoke() {
    this.http.get(this.jokeUrl).subscribe(
      (data: any) => {
        let joke = data[0];
        this.setup = joke.setup;
        this.punchline = joke.punchline;
      },
      (err) => {}
    );
  }
}
