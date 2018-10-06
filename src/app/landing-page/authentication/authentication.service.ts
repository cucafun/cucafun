import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signupUser(email: string, username: string, password: string, ){
    // we need to make a post http request to the backend server sending
    // email and password to create the user.
    console.log(`email: ${email} | password: ${password} | username: ${username}`)
  }
}
