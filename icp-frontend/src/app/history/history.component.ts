import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider/provider';
import { BookingService } from '../services/booking-service/booking.component.service';
import { CheckinService } from '../services/checkin-service/checkin.component.service';
import { EthereumService } from '../services/ethereum-service/ethereum.component.service';

import * as jwtDecode from 'jwt-decode';
import 'rxjs/Rx';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public show: any = null;
  constructor(
    public ethereumService:EthereumService,
    public provider: Provider,
    public bookingService: BookingService,
    public checkinService: CheckinService
  ) {
  }
  test(){
    
    this.ethereumService.getBlockchain().subscribe((data) => {
      console.log('data', data);
  },
  (error) => {
      alert("Login not Succesfull")
  });
  }
  checkin(flightid, userid) {
    console.log(flightid, userid);
    this.checkinService.checkin(flightid, userid).subscribe(
      data => {
        this.bookingService
          .listBookingByUser(this.provider.userData.data.USERID)
          .subscribe(
            data => {
              console.log('data', data);
              this.show = data;
            },
            error => {
              console.log(error);
            }
          );
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    if (!this.provider.userData) {
      this.provider.userData = jwtDecode(localStorage.getItem('token'));
    }
    this.bookingService
      .listBookingByUser(this.provider.userData.data.USERID)
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
