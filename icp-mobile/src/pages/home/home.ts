import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {BookingPage} from '../booking/booking'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public like_btn = {
    color: 'black',
    icon_name: 'heart-outline'
  };
  public tap: number = 0;

  constructor(public navCtrl: NavController) {

  }
  tapPhotoLike(times) { // If we click double times, it will trigger like the post
    this.tap++;
    if(this.tap % 2 === 0) {
      this.likeButton();
    }
  }
  likeButton() {
    if(this.like_btn.icon_name === 'heart-outline') {
      this.like_btn.icon_name = 'heart';
      this.like_btn.color = 'danger';
      // Do some API job in here for real!
    }
    else {
      this.like_btn.icon_name = 'heart-outline';
      this.like_btn.color = 'black';
    }
  }
  search(){
    this.navCtrl.push(BookingPage)
  }

}
