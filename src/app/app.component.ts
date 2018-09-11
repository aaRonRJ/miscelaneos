import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { HomePage } from '../pages/home/home';

// Providers
import { SettingsProvider } from '../providers/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private settingsProvider: SettingsProvider) {
    platform.ready().then(() => {
      this.settingsProvider.loadStorage()
      .then(() => {
        if (this.settingsProvider.settings.showTutorial) {
          this.rootPage = "Introduction";
        } else {
          this.rootPage = HomePage;
        }

        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }
}

