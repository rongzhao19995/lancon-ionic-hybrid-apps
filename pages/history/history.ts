import { DictionaryPage } from '../dictionarydetail/dictionary';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage'
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  public histories = []




  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage, platform: Platform) {
    let me = this;
    platform.ready().then(() => {
      this.nativeStorage.getItem('history').then(function(json) {
        if (json) {
          me.histories = JSON.parse(json);
          console.log(me.histories);
        }
        else {
          console.log("Empty .No Value");
        }
      });
    });
  }


  // itemSelected(Historyitem) {
  //    this.navCtrl.push(DictionaryPage, { Historyitem: Historyitem });
  //  }


}
