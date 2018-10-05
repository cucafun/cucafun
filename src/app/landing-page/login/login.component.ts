import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  isSignUp: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.isSignUp){
      return this.userForm = new FormGroup({
        // If user IS signing up constrcut new form for signup
      });
    }
    return this.userForm = new FormGroup({
      // If user is NOT signing up construct new form for login
    });
  }

}
