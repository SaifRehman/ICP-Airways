import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider/provider';
import { BookingService } from '../services/booking-service/booking.component.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public show:any=null;
  constructor(public provider:Provider, public bookingService:BookingService) {

   }

  ngOnInit() {
    this.bookingService.listBookingByUser(this.provider.userData.data.USERID).subscribe((data) => {
      console.log('data', data);
      this.show = data
    },
      (error) => {
        console.log(error)
      });
  }

}
