import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrl: './memes.component.scss',
})
export class MemesComponent {
  constructor(private http: HttpClient) {}
  memeCount = 1;
  url: string = 'https://meme-api.com/gimme';
  urlArray: string[] = [];
  loadUrl: string = '';

  ngOnInit() {
    this.loadMeme();
  }

  loadMeme() {
    if (this.memeCount > 0) this.loadUrl = this.url + '/' + this.memeCount;
    else this.loadUrl = this.url;

    console.log(this.loadUrl);
    let response: any;

    this.http.get(this.loadUrl).subscribe((data: any) => {
      this.urlArray.splice(0, this.urlArray.length);
      if (this.memeCount == 0) {
        response = data;
        this.urlArray.push(response.url);
      } else {
        response = data.memes;
        for (let item of response) {
          this.urlArray.push(item.url);
        }
      }
    });
  }
}
