import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {InstasComponent} from './instas.component';

@Component({
    selector: 'insta-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', component: InstasComponent, useAsDefault: true}
])
export class AppComponent {
    title = 'Insta gallery';
    hashtag : string;
    search(hashtag){
        return this.hashtag;
    }
}