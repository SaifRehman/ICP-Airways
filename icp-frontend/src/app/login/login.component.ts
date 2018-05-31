import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.component.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:String;
  password:String;
  public read:String
  constructor(public loginService:LoginService) {

   }

  ngOnInit() {
  }
  login(){
    this.loginService.login(this.email,this.password).subscribe((data) => {
      console.log('data', data);
      this.read=data;
      alert(this.read['message'])
  },
  (error) => {
      console.log(error)
      alert(this.read['message'])
  });
  }

}
