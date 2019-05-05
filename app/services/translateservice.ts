import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TranslateService{
    http:any;
    baseUrl: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCb9S2RrhodAyx_XBdmmgfx3_2PJ30i--U';
    }

    getPosts(text, target){
        return this.http.get(this.baseUrl+'&q='+text+'&target='+target)
            .map(res => res.json());
    }
}
