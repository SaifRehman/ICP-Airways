import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { SignupPage } from "../signup/signup";
import { LoginService } from "../../services/login-service/login.component.service";
import { AlertController, LoadingController } from "ionic-angular";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  username: String;
  password: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}
  login() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.loginService.login(this.username, this.password).subscribe(
      data => {
        this.navCtrl.push(TabsPage);
        loading.dismiss();
      },
      error => {
        console.log(error)
        let alert = this.alertCtrl.create({
          title: "Alert!",
          subTitle: "OOOOPS... Something Went Wrong",
          buttons: ["Dismiss"]
        });
        loading.dismiss();
        alert.present();
      }
    );
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}
