import {Injectable} from '@angular/core';

@Injectable()
export class Provider {
public apiUrl:any;

constructor() {
    this.apiUrl={
        login:"http://localhost:3000/login",
        signup:"http://localhost:3000/createUser"
    }
  }
}
