import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ContentLibService } from "projects/content-lib/src/lib/content-lib.service";
import { CategoriesService } from "projects/content-lib/src/lib/categories.service";


@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  articleAlias: string;
  articleData;
  categories;
  alias;
  constructor(
    private contentLibService: ContentLibService,
    private categoriesService: CategoriesService,
    private actR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actR.params.subscribe(params => {
      // Get Categories
      this.categoriesService.get().subscribe(data => {
        this.categories = data;
      });

      // get Articles
      this.getArticles();
    });
  }

  searchByCategory(event) {
    this.contentLibService.setCategory(event.target.value);
    this.getArticles();
  }

  searchByText(searchText) {
    this.contentLibService.setSearchText(searchText);
    this.getArticles();
  }

  getArticles() {
    // Get Content libraries
    this.contentLibService
      .getArticle(this.actR.snapshot.routeConfig.path)
      .subscribe(data => {
        if (data) {
          this.articleData = data;
        }
      });
  }
}
