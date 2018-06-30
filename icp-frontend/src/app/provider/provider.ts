import {Injectable} from '@angular/core';

@Injectable()
export class Provider {
public apiUrl:any;
public userData:any=null;
public token:any=null;
constructor() {
    this.apiUrl={
        login:"http://192.168.99.100:30096/login",
        signup:"http://192.168.99.100:30095/createUser",
        book:"http://192.168.99.100:30099/book",
        listBookingByUser:"http://192.168.99.100:30099/listBookingByUser",
        checkin:"http://192.168.99.100:30098/checkin",
        listFlightsByID:"http://192.168.99.100:30097/listFlightsByID",
        listFlights:"http://192.168.99.100:30097/listFlights"
    }
  }
}