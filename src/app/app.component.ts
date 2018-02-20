import { Component } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  name: string = '';
  age: number;
  found: boolean;
  title = 'app';
  constructor(private httpClient: HttpClient) {}

  onNameKeyUp(event: any) {
    this.name = event.target.value;
    this.found = false;
  }

  getProfile() {
    this.httpClient
      .get(
        `https://my-json-server.typicode.com/kacperTheCat/json_serv/profiles/?name=${
          this.name
        }`
      )
      .subscribe((data: any) => {
        if (data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      });
  }

  postProfile() {
    this.httpClient
      .post(
        `https://my-json-server.typicode.com/kacperTheCat/json_serv/profiles
        `,{name: 'mark', age: 29}
      )
      .subscribe((data: string) => {
        console.log(data);
      });
  }
}
