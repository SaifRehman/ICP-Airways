import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.component.service'
import { Provider } from '../provider/provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:String;
  password:String;
  public read:any;
  constructor(public loginService:LoginService,  public provider:Provider) {

   }

  ngOnInit() {
  }
  login(){
    this.loginService.login(this.email,this.password).subscribe((data) => {
      console.log('data', data);
      this.read=data;
      this.provider.userData=data;
      alert('Login Succesfull')
  },
  (error) => {
      alert("Login not Succesfull")
      this.provider.userData=null;
  });
  }

}
