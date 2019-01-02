import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OffersPage } from '../pages/offers/offers';
import { timer } from 'rxjs/observable/timer';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  showSplash = true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // statusBar.overlaysWebView(true);
      // statusBar.backgroundColorByHexString('#000000');
      splashScreen.hide();
      timer(1000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s

    });
  }
}
