import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService} from '../../app/services/translateservice';
import {TextToSpeech} from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})
export class TextPage {
  text: any;
  items: any;
  target: any;





  constructor(public navCtrl: NavController, private translateService:TranslateService, private tts:TextToSpeech) {
    this.getDefaults();
  }
  //ngOnInit(){
  //    this.getPosts('guy','zh-CN');
//}


getDefaults(){
  this.target = 'en';
}
getPosts(text, target){
  this.translateService.getPosts(text, target).subscribe(response => {
console.log(response);
   this.items = response.data.translations;
  });
}

readCat(category){
  if(category=='ms'){
   category ='ms-MY'
}else if(category=='en'){
  category ='en-US'
}else if(category=='zh-CN'){
  category ='zh-CN'
}else if(category=='ja'){
  category ='ja-JP'
}else if(category=='no'){
  category ='nb-NO'
}else if(category=='pt'){
  category ='pt-PT'
}else if(category=='ro'){
  category ='ro-RO'
}else if(category=='ru'){
  category ='ru-RU'
}else if(category=='th'){
  category ='th-TH'
}else{
  category ='es-AR'
}
console.log(category);
return category;
}


async read(TranslateText,category) : Promise<any> {
  //Read the text from the model via TTS
  if(category=='ms'){
   category ='ms-MY'
}else if(category=='en'){
  category ='en-US'
}else if(category=='zh-CN'){
  category ='zh-CN'
}else if(category=='ja'){
  category ='ja-JP'
}else if(category=='no'){
  category ='nb-NO'
}else if(category=='pt'){
  category ='pt-PT'
}else if(category=='ro'){
  category ='ro-RO'
}else if(category=='ru'){
  category ='ru-RU'
}else if(category=='th'){
  category ='th-TH'
}else{
  category ='es-AR'
}
console.log(category)

  try {
    await this.tts.speak({
      text: TranslateText,
      locale: category,
      rate: 1.5
    });
  }
  catch (e) {
    console.log(e);
  }
}


//launch(url){
  // const browser = this.iab.create(url);
//}
}
