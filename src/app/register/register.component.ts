import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username: string ="";
  login: string ="";
  password: string ="";
 
 
  constructor(private http: HttpClient )
  {
 
  }
  save()
  {
  
    let bodyData = {
      "username" : this.username,
      "login" : this.login,
      "password" : this.password
    };
    this.http.post("http://localhost:9081/api/v1/user/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
 
    });
  }
}