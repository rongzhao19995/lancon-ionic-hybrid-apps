import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-dictionarydetail',
  templateUrl: 'dictionarydetail.html'
})
export class DictionaryDetailPage {
  item: any;



  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private nativeAudio: NativeAudio) {
    this.item = navParams.get('item');

  }
  playExample(music) {
    this.nativeAudio.preloadSimple('uniqueId1', '"http://api.pearson.com"+music');
  }
}
