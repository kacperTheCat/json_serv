import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'our XRAY app, pls take picture!';
  isCheck = true;
  onChange($event) {
    console.log($event);
  }
}
