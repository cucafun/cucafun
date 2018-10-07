import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: Http) { }

  signupUser(email: string, username: string, password: string, ){
    // we need to make a post http request to the backend server sending
    // email and password to create the user.
    const userData = {email: email, username: username, password: password};

    console.log(`email: ${email} | password: ${password} | username: ${username}`)

    let headers: HttpHeaders = new HttpHeaders();    
    return this.http.get('/users');
  }
}
