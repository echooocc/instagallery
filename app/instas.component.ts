import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import { Insta } from './insta';
import {InstaService} from './insta.service';

@Component({
    selector: 'my-instas',
    templateUrl: 'app/instas.component.html'
})
export class InstasComponent {
  instas: Insta[] = [];
}