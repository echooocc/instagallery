import {Component, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {InstasComponent} from './instas.component';
import {InstaService} from './insta.service';
import { Insta } from './insta';

@Component({
    selector: 'insta-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, InstasComponent],
    providers: [InstaService, HTTP_PROVIDERS]
})

export class AppComponent{  
    title = 'Insta gallery';  
    constructor(private _instaService: InstaService) { }
    instas: Insta[];
    search(tag: string) { 
       return this.instas = this._instaService.getInstas(tag);
    }
}