import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export interface Insta {
  imageUrl : string;
  size : number
}

@Injectable()
export class InstaService{
    constructor(private _http: Http) { }
    getPictures(tag) {
        return "hihi";
    }
}