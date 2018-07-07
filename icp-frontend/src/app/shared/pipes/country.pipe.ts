import { Pipe, PipeTransform } from '@angular/core'
import { pipe } from 'rxjs';
import * as iso from 'iso-3166-1'
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';

@Pipe({
    name: 'isoToCountryName'
})

export class CountryRefactorPipe implements PipeTransform {
    public _url:any='./assets/airports.json'
    public rawData:any=[]
    public fullCountryName:any='airport not found';
    constructor(public http: Http) {
        this.getJSON()
        .subscribe(data => 
          {
              this.rawData = data
          }
      )
    }
    transform(value: any, ...args: any[]) {
        for(var i = 0; i < this.rawData.length; i++) {
            var obj = this.rawData[i];
            if(obj.iata === value){
                this.fullCountryName = obj.name
                break;
            }
        }
        return this.fullCountryName

    }
    public getJSON() {
        return this.http.get(this._url)
        .map((response: Response) => response.json());
    }
}