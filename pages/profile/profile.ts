import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  item: any;
  public UserName: any;
  public AddressNumber: any;
  public PhoneNumber:any;
  public Email:any;
  public editForm;



  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private nativeAudio: NativeAudio) {
    


    // this.editForm = formBuilder.group({
    //   address:[this.AddressNumber ,Validators.compose([Validators.minLength(6), Validators.required])],
    //   city:[this.city, Validators.compose([Validators.minLength(6), Validators.required])],
    //   phone:[this.phone, Validators.compose([Validators.maxLength(10), Validators.required])],
    // });
  }



}
