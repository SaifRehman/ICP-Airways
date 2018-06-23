import {Injectable} from '@angular/core';

@Injectable()
export class Provider {
public apiUrl:any;
public userData:any=null;
public token:any=null;
constructor() {
    this.apiUrl={
        login:"http://loginsvc.my-namespace.svc.cluster.local/login",
        signup:"http://signupsvc.my-namespace.svc.cluster.local/createUser",
        book:"http://bookingsvc.my-namespace.svc.cluster.local/book",
        listBookingByUser:"http://bookingsvc.my-namespace.svc.cluster.local/listBookingByUser",
        checkin:"http://checkinsvc.my-namespace.svc.cluster.local/checkin",
        listFlightsByID:"http://listingsvc.my-namespace.svc.cluster.local/listFlightsByID",
        listFlights:"http://listingsvc.my-namespace.svc.cluster.local/listFlights"
    }
  }
}