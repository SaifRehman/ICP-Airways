import { flightTrigger } from './../animations';
import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider/provider';
import { ListingService } from '../services/listing-schedule-service/listing.component.service';
import { BookingService } from '../services/booking-service/booking.component.service';
import * as jwtDecode from 'jwt-decode';
import 'rxjs/Rx';
import { EthereumService } from '../services/ethereum-service/ethereum.component.service';
import { Headers, Http, RequestOptions, Response } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [flightTrigger]
})
export class HomeComponent implements OnInit {
  public loading:any=false;
  public show: any = null;
  public Year: any;
  public Month: any;
  public DayOfMonth: any;
  origin: any;
  dest: any;
  date: any;
  public _url: any = "./assets/airports.json";
  constructor(
    public ethereumService: EthereumService,
    public provider: Provider,
    public listingService: ListingService,
    public bookingService: BookingService,
    public http: Http
  ) {
    this.show = null;
  }

  ngOnInit() {
    this.loading = true;
    if(!this.provider.rawData){
      this.getJSON().subscribe(data => {
        this.loading = false
        this.provider.rawData = data;
      });
    }
    if (!this.provider.userData) {
      this.provider.userData = jwtDecode(localStorage.getItem('token'));
    }
  }
  public getJSON() {
    return this.http
      .get(this._url)
      .map((response: Response) => response.json());
  }
  clear() {
    this.show = null;
  }
  search() {
    this.loading = true;
    console.log(this.origin, this.dest, this.date);
    this.Year = Number(this.date.split('-')[0]);
    this.Year = String(this.Year);

    this.Month = Number(this.date.split('-')[1]);
    this.Month = String(this.Month);

    this.DayOfMonth = Number(this.date.split('-')[2]);
    this.DayOfMonth = String(this.DayOfMonth);

    this.listingService
      .listFlights(
        this.Year,
        this.Month,
        this.DayOfMonth,
        this.origin,
        this.dest
      )
      .subscribe(
        data => {
          this.loading = false;
          console.log('data', data);
          this.show = data;
        },
        error => {
          this.loading = false;
          console.log(error);
        }
      );
  }
  book(id) {
    this.loading = true
    this.ethereumService.getBlockchain().subscribe((data) => {
      var temp = true;
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        if (obj.USERID === this.provider.userData.data.USERID && obj.FLIGHTID === id) {
          temp = false
          break;
        }
        console.log(obj.id);
      }
      if (temp) {
        data.push({ USERID: this.provider.userData.data.USERID, FLIGHTID: id })
        var dataPush = JSON.stringify(data)
        console.log(data)
        this.ethereumService.setBlockchain(dataPush).subscribe((data) => {
          console.log('message', data);
          this.bookingService
            .booking(this.provider.userData.data.USERID, id)
            .subscribe(
              data => {
                this.loading = false
                console.log('booked flight', data);
                this.show = data;
              },
              error => {
                console.log(error);
              }
            );
        },
          (error) => {
            this.loading = false

            alert("Login not Succesfull")
          });
      }
      else{
        this.loading = false

        console.log("you have booked this flight aready")
      }
    },
      (error) => {      this.loading = false

        alert("cant get data from blockchain")
      });
  }
}
