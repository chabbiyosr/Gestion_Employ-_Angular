import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user';
import { AppComponent } from './app.component';

@Injectable()
export class LoginService {
  constructor(public http: HttpClient) { }

  public logIn(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    const base64Credential: string = btoa(user.login + ':' + user.password);
    headers = headers.append('Authorization', 'Basic ' + base64Credential);

    const options = { headers: headers };

    return this.http.get<any>(AppComponent.API_URL + '/login', options)
      .pipe(map(response => {
        // login successful if there's a jwt token in the response
        const user = response.principal; // the returned user object is a principal object
        if (user) {
          // store user details in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }
}
