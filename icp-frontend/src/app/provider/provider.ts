import {Injectable} from '@angular/core';

@Injectable()
export class Provider {
public apiUrl:any;
public userData:any=null;
public token:any=null;
constructor() {
    this.apiUrl={
        login: process.env.login,
        signup: process.env.signup,
        book: process.env.book,
        listBookingByUser: process.env.listBookingByUser,
        checkin: process.env.checkin,
        listFlightsByID: process.env.listFlightsByID,
        listFlights: process.env.listFlights
    }
  }
}