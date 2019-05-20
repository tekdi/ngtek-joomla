import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContentLibService } from "projects/content-lib/src/lib/content-lib.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  articleData;

  constructor(
    private contentLibService: ContentLibService,
    private actR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actR.params.subscribe(parameters => {
      // Get Content libraries
      this.contentLibService.getArticle(parameters.id).subscribe(data => {
        if (data) {
          console.log(data);
          this.articleData = data[0];
        }
      });
    });
  }
}
