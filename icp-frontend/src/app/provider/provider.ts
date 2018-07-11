import {Injectable} from '@angular/core';

@Injectable()
export class Provider {
public apiUrl:any;
public userData:any=null;
public token:any=null;
public rawData:any=null;
public url:any = "169.61.62.89";
constructor() {
    this.apiUrl={
        login: "http://"+this.url+":30093/login",
        signup: "http://"+this.url+":30094/createUser",
        book: "http://"+this.url+":30090/book",
        listBookingByUser: "http://"+this.url+":30090/listBookingByUser",
        checkin: "http://"+this.url+":30091/checkin",
        listFlightsByID: "http://"+this.url+":30092/listFlightsByID",
        listFlights: "http://"+this.url+":30092/listFlights"
    }
    console.log(this.apiUrl)
  }
  
}