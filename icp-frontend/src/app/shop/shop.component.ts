import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider/provider';
import { XrpService } from '../services/xrp-service/xrp.component.service';
import * as iso from "iso-3166-1";

import * as jwtDecode from 'jwt-decode';
import 'rxjs/Rx';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public loading: any = false;

  constructor(
    public xrpService:XrpService
  ) {
  }


buy(data){
  this.loading = true;

  this.xrpService.xrp(data).subscribe((data) => {
    this.loading = false;
    console.log('data', data);
},
(error) => {
    // alert("Login not Succesfull")
});
}
  ngOnInit() {
 
  }
}
