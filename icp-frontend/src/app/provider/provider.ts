import {Injectable} from '@angular/core';

@Injectable()
export class Provider {
public apiUrl:any;
public userData:any=null;
public token:any=null;
constructor() {
    this.apiUrl={
        login: "http://loginsvc.svc.cluster.local/login",
        signup: "http://signupsvc.default.svc.cluster.local:3004/createUser",
        book: "http://bookingsvc.svc.cluster.local/book",
        listBookingByUser: "http://bookingsvc.svc.cluster.local/listBookingByUser",
        checkin: "http://checkinsvc.svc.cluster.local/checkin",
        listFlightsByID: "http://listingsvc.svc.cluster.local/listFlightsByID",
        listFlights: "http://listingsvc.svc.cluster.local/listFlights"
    }
  }
}