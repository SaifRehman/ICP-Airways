import {Injectable} from '@angular/core';

@Injectable()
export class Provider {
public apiUrl:any;
public userData:any=null;
constructor() {
    this.apiUrl={
        login:"http://localhost:3001/login",
        signup:"http://localhost:3000/createUser",
        book:"http://localhost:3000/book",
        listBookingByUser:"http://localhost:3000/listBookingByUser",
        checkin:"http://localhost:3000/checkin",
        listFlightsByID:"http://localhost:3000/listFlightsByID",
        listFlights:"http://localhost:3000/listFlights"
    }
  }
}
