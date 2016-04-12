import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'; //add this to avoid "this._http.get(...).map is not a function" error

@Injectable()
export class InstaService{
    constructor(private _http: Http) { }
    public API_BASE_URL = window.location.href+'hashtag/';
    getInstas(tag: string) { 
       return this._http.get(this.API_BASE_URL+tag)
        .map(res => res.json().data);
    }
}