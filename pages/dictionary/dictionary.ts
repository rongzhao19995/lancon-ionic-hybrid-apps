import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DictionaryService} from '../../app/services/dictionaryservice';
import { DictionaryDetailPage } from '../dictionarydetail/dictionarydetail';
import { NativeStorage } from '@ionic-native/native-storage'
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html'
})
export class DictionaryPage {
  items: any;
  text: string;


  today = new Date();
  public histories = []
  public Historyitem: any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private dictionaryService: DictionaryService,
    private nativeStorage: NativeStorage,
    platform: Platform
  ) {

    let me = this;
  platform.ready().then(() => {
    this.nativeStorage.getItem('history').then(function (json) {
      if (json) {
        me.histories = JSON.parse(json);
        console.log(me.histories);
      }
      else{
                  console.log("Empty .No Value");
      }
    });
  });


    this.Historyitem = navParams.get('Historyitem');

   }


  getItems($event) {
    this.getResults(this.text)
  }

  getResults(text) {
    this.dictionaryService.getResults(text).subscribe(response => {
      // console.log(response);
      this.items = response.results;
      console.log(this.items);
    });
  }

  goToDetails(item) {
    this.navCtrl.push(DictionaryDetailPage, { item: item });
    let itemT = item.headword;
    console.log("3", itemT);
    this.addToItems(itemT);
  }


  addToItems(itemT) {
    this.histories.push({
      dateV: this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate(),
      timeV: this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds(),
      translateV: itemT,
    });
    this.save();
  }

  save() {
    this.nativeStorage.setItem('history', JSON.stringify(this.histories));
    console.log(this.histories);
  }

}
