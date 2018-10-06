import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
//import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(){
    return this.userForm = new FormGroup({
      // If user is NOT signing up construct new form for login
      //TODO implement async validator to check if the username is valid from the server
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;
    const email = form.value.email;
    console.log(`username: ${username} | password: ${password} | email: ${email}`)
  }

}
