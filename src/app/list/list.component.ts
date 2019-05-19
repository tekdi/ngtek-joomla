import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ContentLibService } from 'projects/content-lib/src/lib/content-lib.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  apiBaseUrl: String;
  articleAlias: String;
  articleData;
  alias;
  constructor(private _httpClient: HttpClientModule,
              private _contentLibService: ContentLibService,
              private _router: Router,
              private _actR: ActivatedRoute ) {
   }

  ngOnInit() {
    this.apiBaseUrl = environment.apiBaseUrl;
    this._actR.params.subscribe(params => {
        this._contentLibService.getArticle(this.apiBaseUrl, this._actR.snapshot.routeConfig.path).subscribe(data => {
          if (data) {
            this.articleData = data;
         }
      });
   });
  }

}
