import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {
  allowToEnter = false;
  allowToLeave = false;

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
    console.log('constructor');
  }

  goToPage2() {
    this.navCtrl.push('myPage2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

  ionViewCanEnter() {
    return new Promise((resolve, reject) => {
      this.alertCtrl.create({
        title: '¿Seguro?',
        message: '¿Está seguro que desea entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              resolve(false);
            }
          },
          {
            text: 'Sí, seguro',
            handler: () => {
              resolve(true);
            }
          }
        ]
      }).present();
    });
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave');

    return new Promise((resolve, reject) => {
      const loading = this.loadingCtrl.create({
        content: "Espere por favor..."
      });
      loading.present();

      setTimeout(() => {
        loading.dismiss();
        resolve(true);
      }, 2000);
    });
  }
}
