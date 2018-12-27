
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Provider } from '../../provider/provider';
import {HttpWrapper} from "ionic-native-http-angular-wrapper";

import 'rxjs/Rx';

@Injectable()
export class CheckinService {
    public constructor(public http: Http, public provider:Provider, public Http:HttpWrapper) {
    }

    public checkin(BookingID,UserID): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.provider.token
            })
        });
        const link = this.provider.apiUrl.checkin+'/'+String(BookingID)+'/'+String(UserID)
        return this.Http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}