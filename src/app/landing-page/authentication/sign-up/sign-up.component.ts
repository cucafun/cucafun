import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../models/user/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthenticationService, private user: User) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSignUp(form: NgForm){
    this.user.email = form.value.email;    
    this.user.username = form.value.username;
    this.user.password = form.value.password;

    this.authService.signupUser(this.user)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }


}
