import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DictionaryService{
    http:any;
    baseUrl: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?';
    }

    getResults(text){
        return this.http.get(this.baseUrl+'headword='+text+'&limit=2')
            .map(res => res.json());
    }
}
