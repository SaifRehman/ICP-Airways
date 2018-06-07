import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider/provider';
import { ListingService } from '../services/listing-schedule-service/listing.component.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public Year:any;
  public Month:any;
  public DayOfMonth:any;
  origin:any;
  dest:any;
  date:any;
  constructor(public provider:Provider, public listingService:ListingService) {

   }

  ngOnInit() {
  }
  search(){
    console.log(this.origin,this.dest,this.date)
    this.Year = Number(this.date.split('-')[0])
    this.Year = String(this.Year)

    this.Month = Number(this.date.split('-')[1])
    this.Month = String(this.Month)

    this.DayOfMonth = Number(this.date.split('-')[2])
    this.DayOfMonth = String(this.DayOfMonth)

    this.listingService.listFlights(this.Year, this.Month, this.DayOfMonth, this.origin, this.dest).subscribe((data) => {
      console.log('data', data);
    },
      (error) => {
        console.log(error)
      });

  }
}
