import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { BookingService } from "../../services/booking-service/booking.component.service";
import { Provider } from "../../provider/provider";
import { LoadingController } from "ionic-angular";

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-booking",
  templateUrl: "booking.html"
})
export class BookingPage {
  public data: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public bookingService: BookingService,
    public provider: Provider,
    public loadingCtrl: LoadingController
  ) {
    this.data = navParams.get("item");
    console.log("this is data", this.data);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MapPage");
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "none";
      });
    }
  }
  ionViewWillLeave() {
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "flex";
      });
    }
  }
  cancel() {
    this.navCtrl.pop();
  }
  confirm(id) {
    let alert = this.alertCtrl.create({
      title: "Confirm Booking",
      message: "Are you sure, you want to book this flight?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Book",
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: "Please wait..."
            });
            loading.present();
            this.bookingService
              .booking(
                this.provider.userData.data.USERID,
                id,
                "",
                "",
                "",
                "",
                "",
                ""
              )
              .subscribe(
                data => {
                  console.log("booked flight", data);
                  let alert2 = this.alertCtrl.create({
                    title: "Success!",
                    subTitle: "You Have Successfully Booked Your Flight",
                    buttons: ["Dismiss"]
                  });
                  loading.dismiss();
                  alert2.present();
                  this.navCtrl.pop();
                },
                error => {
                  let alert3 = this.alertCtrl.create({
                    title: "Alert!",
                    subTitle: "OOOPS... Something Went Wrong While Booking",
                    buttons: ["Dismiss"]
                  });
                  loading.dismiss();
                  alert3.present();
                  this.navCtrl.pop();
                  console.log(error);
                }
              );
          }
        }
      ]
    });
    alert.present();
  }
}
