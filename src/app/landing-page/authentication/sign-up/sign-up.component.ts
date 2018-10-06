import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSignUp(form: NgForm){
    const email = form.value.email;    
    const username = form.value.username;
    const password = form.value.password;

    this.authService.signupUser(email, username, password);
  }


}
