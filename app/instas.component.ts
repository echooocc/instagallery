import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Insta, InstaService} from './insta.service';

@Component({
    selector: 'my-instas',
    templateUrl: 'app/instas.component.html'
})
export class InstasComponent {
  instas: Insta[];

  constructor(private _instaService: InstaService) { }

  getPictures(tag) {
    this._instaService.getPictures(tag).then(instas => this.instas = instas);
  }
}