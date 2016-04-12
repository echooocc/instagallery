import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'; //add this to avoid "this._http.get(...).map is not a function" error

import { Insta } from './insta';

@Injectable()
export class InstaService{
    instas: Insta[];
    constructor(private _http: Http) { }
    getInstas(tag: string) { 
       return this._http.get('http://localhost:3000/hashtag/'+tag)
        .map(res => res.json().data)
        .subscribe(
            res => {this.instas = res},
            err => console.error(err),
            () => console.log('success! '+this.instas)
        );
    }
}

