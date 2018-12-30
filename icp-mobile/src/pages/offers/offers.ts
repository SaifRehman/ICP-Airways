import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingService } from '../../services/booking-service/booking.component.service'
/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  public values:any;
  upgrades:any;
  pricing:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bookingService:BookingService) {
    this.values = navParams.get("item");
    console.log(this.values);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }
  cancel(){
    this.navCtrl.pop();
  }
  confirm(){
    console.log(this.pricing,this.upgrades)
  }
}
