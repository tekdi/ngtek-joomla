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
  articleAlias: string;
  articleData;
  alias;
  constructor(private httpClient: HttpClientModule,
              private contentLibService: ContentLibService,
              private router: Router,
              private actR: ActivatedRoute ) {
   }

  ngOnInit() {
    this.actR.params.subscribe(params => {
        this.contentLibService.getArticle(this.actR.snapshot.routeConfig.path).subscribe(data => {
          if (data) {
            this.articleData = data;
         }
      });
   });
  }

}
