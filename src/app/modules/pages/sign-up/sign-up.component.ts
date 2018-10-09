import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, AuthenticationService } from '@app/core/services';


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
    this.userService.user.email = form.value.email;    
    this.userService.user.username = form.value.username;
    this.userService.user.password = form.value.password;

    this.authService.signupUser(this.userService.user)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }


}
