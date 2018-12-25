import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardService} from '../dashboard/dashboard.service'
import {MapPage} from '../map/map'
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public show:any=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardService:DashboardService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.dashboardService.list().subscribe((data)=>{
      console.log(data['Response']['View'][0]['Result']);
      this.show = (data['Response']['View'][0]['Result']);
      

    },(error)=>{
      console.log(error)
    })

  }
  go(lat,long){
    this.navCtrl.push(MapPage,{
      item:{
        lat:lat,
        long:long
      }
    })
  }
}
