import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signupUser(email: string, username: string, password: string, ){
    // we need to make a post http request to the backend server sending
    // email and password to create the user.
    const userData = {email: email, username: username, password: password};

    console.log(`email: ${email} | password: ${password} | username: ${username}`)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.get('api/users');
  }
}
