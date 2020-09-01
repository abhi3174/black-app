import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'black-app';
  public list: any = [];

  // Services :: Injection :: Singelton :: Short Syntax
  /*private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }*/
  constructor(private http: HttpClient) {}

  async makeAjaxCall() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const results = await this.http.get(url).toPromise();
    this.list = results;
  }
}
