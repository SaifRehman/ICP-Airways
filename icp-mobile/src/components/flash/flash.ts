import { Component } from '@angular/core';
 
@Component({
  selector: 'flash',
  templateUrl: 'flash'
})
export class FlashCardComponent {
 
  flipped: boolean = false;
 
  constructor() {
 
  }
 
  flip(){
    this.flipped = !this.flipped;
  }
 
}