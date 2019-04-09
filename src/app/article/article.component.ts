import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ContentLibService } from '../../../projects/content-lib/src/lib/content-lib.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article_id: Number;
  apiBaseUrl: String;
  articleAlias: String;
  articleData;
  alias;
  constructor(private _httpClient: HttpClient,
              private _contentLibService: ContentLibService,
              private _router: Router,
              private _actR: ActivatedRoute ) {
   }

  ngOnInit() {
    this.apiBaseUrl = environment.apiBaseUrl;
    console.log('this.apiBaseUrl', this.apiBaseUrl);
    console.log('this._router.url', this._router.url);
    this._actR.params.subscribe(params => {
        console.log('I am here', this._actR.snapshot.routeConfig.path);
        this.alias = this._actR.snapshot.routeConfig.path;
        this._contentLibService.getArticle(this.apiBaseUrl, this._actR.snapshot.routeConfig.path).subscribe(data => {
          if (data) {
            this.articleData = data;
            console.log(this.articleData, 'this.articleData');
          }
        });
    });
  }
}

