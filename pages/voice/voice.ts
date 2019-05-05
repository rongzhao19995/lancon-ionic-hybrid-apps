import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition'
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import {TranslateService} from '../../app/services/translateservice';
import {TextToSpeech} from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-voice',
  templateUrl: 'voice.html'
})
export class VoicePage {
  speechList: Array<string> = [];
  items: any;
  itemcat: any;
  itemT:any;

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private speechRecognition: SpeechRecognition,
    public toastCtrl: ToastController,
    private translateService: TranslateService,
    public tts: TextToSpeech
  ) {
// this.getPosts('Hello', 'ja');
  }

  // Check feature available
  // isSpeechSupported(){
  //   this.speechRecognition.isRecognitionAvailable()
  //     .then((available: boolean) => console.log(available))
  // }

  // Check permission
  // getPermission(){
  //   this.speechRecognition.hasPermission()
  //     .then((hasPermission: boolean) => console.log(hasPermission))
  //
  // }

  // Request permissions
  // hasPermission(){
  //   this.speechRecognition.requestPermission()
  //     .then(
  //       () => console.log('Granted'),
  //       () => console.log('Denied')
  //     )
  // }

  // // Stop the recognition process (iOS only)
  // this.speechRecognition.stopListening()
  //
  // // Get the list of supported languages
  // this.speechRecognition.getSupportedLanguages()
  //   .then(
  //     (languages: Array<string>) => console.log(languages),
  //     (error) => console.log(error)
  //   )


  // Start the recognition process
  listenForSpeech() {
    let options = {
      lang: "zh-CN"
    }

    this.speechRecognition.startListening(options)
      .subscribe(data => this.speechList = data, error => console.log(error));

  }

  getPosts(text, category) {
    this.translateService.getPosts(text, category).subscribe(response => {
      this.items = response.data.translations;
      // let itemT = this.items;
      console.log('items',this.items);
      // console.log('itemT',this.itemT);
      // this.itemcat = response.data.translations;
      // blind the locale from google translate services with the texttospeech services.
      if (category == 'ms') {
        category = 'ms-MY'
      } else if (category == 'en') {
        category = 'en-US'
      } else if (category == 'zh-CN') {
        category = 'zh-CN'
      } else if (category == 'ja') {
        category = 'ja-JP'
      } else if (category == 'no') {
        category = 'nb-NO'
      } else if (category == 'pt') {
        category = 'pt-PT'
      } else if (category == 'ro') {
        category = 'ro-RO'
      } else if (category == 'ru') {
        category = 'ru-RU'
      } else if (category == 'th') {
        category = 'th-TH'
      } else {
        category = 'es-AR'
      }
      // console.log(category)
      // console.log(this.items[0].translatedText);
      // console.log(this.items[0].translatedText);
      // console.log(this.items[0].translatedText["0"]);
      // console.log(this.items[0].translations[0].translatedText);
      // console.log(this.items[0].translations[0].translatedText[0]);
      // console.log()
    })
  }

  ReadTextFromFrontEnd(category){
    //Read the text translated from the translation services.
    this.tts.speak({
      text: this.items.translateText,
      locale: 'ja-JP',
      rate: 1,
    });

  }
  // presentToast(speech) {
  //     let toast = this.toastCtrl.create({
  //       message: speech ,
  //       duration: 2000
  //     });
  //     toast.present();
  //   }

}
