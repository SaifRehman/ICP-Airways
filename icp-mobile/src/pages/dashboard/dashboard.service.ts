
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';
import 'rxjs/Rx';

@Injectable()
export class DashboardService {
    public constructor(public http: Http) {
    }

    public list(): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        const link = "http://localhost:3000/"
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}