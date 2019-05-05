import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
// import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TextPage    } from '../pages/text/text';
import { VoicePage   } from '../pages/voice/voice';
import { DictionaryPage } from'../pages/dictionary/dictionary';
import { HistoryPage } from'../pages/history/history';
// import { ProfilePage  } from'../pages/profile/profile';

import {TranslateService} from './services/translateservice';
import {DictionaryService} from './services/dictionaryservice';

@Component({
  templateUrl: 'app.html',
  providers: [TranslateService, DictionaryService]
})
export class MyApp {
    splash = true;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TextPage;
  activePage: any;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Text', component: TextPage,   icon: "text" },
      { title: 'Voice', component: VoicePage, icon: "mic"},
      { title: 'Dictionary', component: DictionaryPage, icon: "search"},
      { title: 'History', component: HistoryPage, icon: "document"},
      // { title: 'Profile', component: ProfilePage, icon: "contact"},

    ];

    this.activePage =  this.pages[0];


  }




  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      setTimeout(() => this.splash = false, 4000);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}
