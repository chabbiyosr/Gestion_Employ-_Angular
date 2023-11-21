import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Company's Employee Management";
  static API_URL="http://localhost:9081/api/v1/user";

}
