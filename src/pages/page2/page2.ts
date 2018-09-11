import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';

@IonicPage({
  name: 'myPage2'
})
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController) {}
}
