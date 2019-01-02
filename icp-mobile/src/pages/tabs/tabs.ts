import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {DashboardPage} from '../dashboard/dashboard'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = DashboardPage;

  constructor(statusBar: StatusBar) {
    statusBar.backgroundColorByHexString('#000000');
  }
}
