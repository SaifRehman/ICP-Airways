import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.component.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: String;
  firstName: String;
  lastName: String;
  location: String;
  age: Number;
  password: String;
  public read: any;
  constructor(public signupService: SignupService) {

  }

  ngOnInit() {

  }
  signup() {
    this.signupService.signup(this.firstName, this.lastName, this.age, this.email, this.password, this.location).subscribe((data) => {
      console.log('data', data);
      this.read = data;
      alert(this.read['message'])
    },
      (error) => {
        console.log(error)
        alert(this.read['message'])
      });
  }

}
