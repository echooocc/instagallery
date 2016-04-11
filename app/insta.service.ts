import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { Insta } from './insta';

@Injectable()
export class InstaService{
    instas: Insta[];
    constructor(private _http: Http) { }
    search(tag: string) { 
       return this._http.get('http://localhost:3000/hashtag/'+tag)
        .subscribe(
            res => {this.instas = res.json().data},
            err => console.error(err),
            () => console.log(this.instas)
        );
    }
}

