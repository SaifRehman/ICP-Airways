import { flightTrigger } from './../animations';
import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider/provider';
import { ListingService } from '../services/listing-schedule-service/listing.component.service';
import { BookingService } from '../services/booking-service/booking.component.service';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [flightTrigger]
})
export class HomeComponent implements OnInit {
  public show: any = null;
  public Year: any;
  public Month: any;
  public DayOfMonth: any;
  origin: any;
  dest: any;
  date: any;
  constructor(
    public provider: Provider,
    public listingService: ListingService,
    public bookingService: BookingService
  ) {
    this.show = null;
  }

  ngOnInit() {
    if (!this.provider.userData) {
      this.provider.userData = jwtDecode(localStorage.getItem('token'));
    }
  }
  clear() {
    this.show = null;
  }
  search() {
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
          console.log('data', data);
          this.show = data;
        },
        error => {
          console.log(error);
        }
      );
  }
  book(id) {
    this.bookingService
      .booking(this.provider.userData.data.USERID, id)
      .subscribe(
        data => {
          console.log('data', data);
          this.show = data;
        },
        error => {
          console.log(error);
        }
      );
  }
}
