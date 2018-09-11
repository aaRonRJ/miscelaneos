import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class SettingsProvider {
  settings = {
    showTutorial: true
  };

  constructor(private storage: Storage,
              private platform: Platform) {}

  loadStorage() {
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        // Device
        console.log('Inicializando storage');

        this.storage.ready().then(
          () => {
            this.storage.get('settings')
            .then((value) => {
              console.log('Storage listo');
              if (value) {
                this.settings = value;
              }
              
              resolve();
            });
          }
        );
      } else {
        // Desktop
        if (localStorage.getItem('settings')) {
          this.settings = JSON.parse(localStorage.getItem('settings'));
        }

        resolve();
      }
    });
  }

  saveStorage() {
    if (this.platform.is('cordova')) {
      // Device
      this.storage.ready()
      .then(() => {
        this.storage.set('settings', this.settings);
      });
    } else {
      // Desktop
      localStorage.setItem('settings', JSON.stringify(this.settings));
    }
  }
}
