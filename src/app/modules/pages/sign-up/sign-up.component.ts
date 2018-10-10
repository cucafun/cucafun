import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, AuthenticationService } from '@app/core/services';
import { User } from '@app/core/models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSignUp(form: NgForm){
    console.log(form);
    const newUser = new User(form.value.email, form.value.username, form.value.password)
    console.log(newUser);
    this.authService.signupUser(newUser)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
