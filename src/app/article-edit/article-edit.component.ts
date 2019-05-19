import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { environment } from "../../environments/environment";
import { ContentLibService } from "projects/content-lib/src/lib/content-lib.service";
import { ActivatedRoute } from "@angular/router";
import { Content } from "projects/content-lib/src/lib/content";
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: "app-article-edit",
  templateUrl: "./article-edit.component.html",
  styleUrls: ["./article-edit.component.scss"]
})
export class ArticleEditComponent implements OnInit {
  apiBaseUrl: string;
  content;
  articleData;
  articleForm;

  constructor(
    private fb: FormBuilder,
    private contentLibService: ContentLibService,
    private actR: ActivatedRoute
  ) {
    this.content = new Content();
  }

  ngOnInit() {
    this.actR.params.subscribe(parameters => {
      if (typeof parameters.id !== 'undefined') {
        // Get Content libraries
        this.contentLibService
          .getArticle(parameters.id)
          .subscribe(data => {
            if (data) {
              this.articleData = data;
            }
          });
      }
    });

    this.articleForm = this.fb.group({
      title: ["Something new"],
      alias: [""],
      introText: ["This is intro text"],
      fullText: [" This full text"]
    });

  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.content.setTitle(this.articleForm.get("title").value);
      this.content.setAlias(this.articleForm.get("alias").value);
      this.content.setIntroText(this.articleForm.get("introText").value);
      this.content.setFullText(this.articleForm.get("fullText").value);
      this.content.setCatId(2);
      this.content.setSate(1);

      console.log(this.content.formData);

      this.actR.params.subscribe(params => {
        this.contentLibService.post(this.content.formData).subscribe(
          data => {
            if (data) {
              alert("Article saved successfully!");
            }
          },
          error => {
            console.log(error);
            alert("Error in Article save.");
          }
        );
      });
    } else {
      alert("Invalid form data");
    }
  }
}
