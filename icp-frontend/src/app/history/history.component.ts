import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider/provider';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(public provider:Provider) {

   }

  ngOnInit() {
    
  }

}
