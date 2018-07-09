import { Component, OnInit } from '@angular/core';
import { translateTrigger, slideTrigger } from '../animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [translateTrigger]
})
export class LandingComponent implements OnInit {
  public displayHeading = false;
  public isLeftVisible = true;
  constructor() {
    setTimeout(() => {
      this.displayHeading = true;
    }, 1000);
  }
  ngOnInit() {}
}
