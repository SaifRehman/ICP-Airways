import {Injectable} from '@angular/core';

@Injectable()
export class Provider {
public apiUrl:any;
public userData:any=null;
public token:any=null;
constructor() {
    this.apiUrl={
        login: "http://9.30.245.52:30093/login",
        signup: "http://9.30.245.52:30094/createUser",
        book: "http://9.30.245.52:30090/book",
        listBookingByUser: "http://9.30.245.52:30090/listBookingByUser",
        checkin: "http://9.30.245.52:30091/checkin",
        listFlightsByID: "http://9.30.245.52:30092/listFlightsByID",
        listFlights: "http://9.30.245.52:30092/listFlights"
    }
    console.log(this.apiUrl);
  }
  
}