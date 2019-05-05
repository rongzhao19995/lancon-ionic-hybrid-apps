import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TextPage } from '../pages/text/text';
import { VoicePage } from '../pages/voice/voice';
import { DictionaryPage } from'../pages/dictionary/dictionary';
import { DictionaryDetailPage } from'../pages/dictionarydetail/dictionarydetail';
import { HistoryPage } from'../pages/history/history';
import { ProfilePage  } from'../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpModule         } from '@angular/http';
import { TextToSpeech       } from '@ionic-native/text-to-speech'
import { SpeechRecognition  } from '@ionic-native/speech-recognition';
import { NativeAudio        } from '@ionic-native/native-audio';
import { NativeStorage      } from '@ionic-native/native-storage'


@NgModule({
  declarations: [
    MyApp,
    TextPage,
    VoicePage,
    DictionaryPage,
    DictionaryDetailPage,
    HistoryPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TextPage,
    VoicePage,
    DictionaryPage,
    DictionaryDetailPage,
    HistoryPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech,
    SpeechRecognition,
    NativeAudio,
    NativeStorage
  ]
})
export class AppModule {}
