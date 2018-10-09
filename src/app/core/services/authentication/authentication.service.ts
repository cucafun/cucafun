import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '@app/core/models';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signupUser(user: User){
    // we need to make a post http request to the backend server sending
    // email and password to create the user.
    console.log(`email: ${user.email} | password: ${user.password} | username: ${user.username}`)
    // Sample of httpOptions
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.post('api/users', user);
  }
}
