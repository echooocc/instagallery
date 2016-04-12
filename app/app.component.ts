import {Component, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {InstaService} from './insta.service';

@Component({
    selector: 'insta-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [InstaService, HTTP_PROVIDERS]
})

export class AppComponent{  
    title = 'Insta gallery';  
    constructor(private _instaService: InstaService) { }
    public instas:any;
    search(tag: string) {
        this._instaService.getInstas(tag)
            .subscribe(
                    res => {this.instas = res},
                    err => console.error(err),
                    () => console.log('success! '+this.instas)
            );
        console.log(this.instas);
    }
}