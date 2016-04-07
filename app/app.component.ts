import {Component} from 'angular2/core';

@Component({
    selector: 'insta-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'Insta gallery';
    hashtag : string;
    search(hashtag){
        return this.hashtag;
    }
}