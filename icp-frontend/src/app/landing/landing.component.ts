import { Component, OnInit } from '@angular/core';
import { translateTrigger, slideTrigger } from '../animations';
import { LoginService } from '../login/login.component.service'
import { SignupService } from '../signup/signup.component.service'

import { Provider } from '../provider/provider';
import { RouterModule, Routes, Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [translateTrigger]
})
export class LandingComponent implements OnInit {
  email:String;
  password:String;
  public read:any;
  public displayHeading = false;
  public isLeftVisible = true;
  emailSignup: String;
  firstName: String;
  lastName: String;
  location: String;
  age: Number;
  passwordSignup: String;
  constructor(public loginService:LoginService,  public provider:Provider, public router: Router,public signupService: SignupService) {
    setTimeout(() => {
      this.displayHeading = true;
    }, 1000);
  }
  ngOnInit() {}
  login(){
    this.loginService.login(this.email,this.password).subscribe((data) => {
      console.log('data', data);
      this.read=data;
      this.read = this.read['token']
      this.provider.token = this.read;
      localStorage.setItem('token',this.provider.token);
      this.provider.userData=jwtDecode(this.read);
      this.router.navigateByUrl('/history');
  },
  (error) => {
      alert("Login not Succesfull")
      this.provider.userData=null;
  });

  }

  signup() {
    this.signupService.signup(this.firstName, this.lastName, this.age, this.email, this.password, this.location).subscribe((data) => {
      console.log('data', data);
      this.read = data;
      alert('Signup sucessfull')
    },
      (error) => {
        console.log(error)
        alert('signup not sucessfull')
      });
  }
}
