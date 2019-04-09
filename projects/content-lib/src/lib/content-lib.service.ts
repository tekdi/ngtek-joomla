import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ContentLibService {

    constructor(private _httpClient: HttpClient, private _router: Router) {
    }

    getArticle(apiBaseUrl, article_alias) {
        const url = apiBaseUrl + 'index.php?option=com_api&app=articles&resource=article&format=raw&article_alias=' + article_alias;
        return this._httpClient.get(url).map(data => {
            if (article_alias) {
               // console.log(data, 'data');
                if (data) {
                    return data['data']['data']['results'];
                }
            }
        });
    }
}