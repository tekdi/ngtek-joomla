import { Component, OnInit, NgModule } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { ContentLibService } from "projects/content-lib/src/lib/content-lib.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Content } from "projects/content-lib/src/lib/content";
import { PARAMETERS } from "@angular/core/src/util/decorators";
import { CategoriesService } from "projects/content-lib/src/lib/categories.service";
import { AngularEditorConfig } from "@kolkov/angular-editor";

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
  categories;
  saveDisabled = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "6rem",
    minHeight: "5rem",
    placeholder: "",
    translate: "no",
    uploadUrl: "v1/images", // if needed
    customClasses: [
      // optional
    ]
  };

  editorLongDescConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    minHeight: "5rem",
    placeholder: "",
    translate: "no",
    uploadUrl: "v1/images", // if needed
    customClasses: [
      // optional
    ]
  };

  constructor(
    private fb: FormBuilder,
    private contentLibService: ContentLibService,
    private actR: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router
  ) {
    this.content = new Content();
  }

  ngOnInit() {
    // Get Categories
    this.categoriesService.get().subscribe(data => {
      this.categories = data;
    });

    this.actR.params.subscribe(parameters => {
      // Get Content libraries
      this.contentLibService.getArticle(parameters.id).subscribe(data => {
        if (data) {
          this.articleData = data;

          if (parameters.id) {
            this.articleForm.controls["id"].setValue(this.articleData[0].id);
            this.articleForm.controls["title"].setValue(
              this.articleData[0].title
            );
            this.articleForm.controls["alias"].setValue(
              this.articleData[0].alias
            );
            this.articleForm.controls["introText"].setValue(
              this.articleData[0].introtext
            );
            this.articleForm.controls["fullText"].setValue(
              this.articleData[0].fulltext
            );
            this.articleForm.controls["category"].setValue(
              this.articleData[0].catid.catid
            );
          }
        }
      });
    });

    this.articleForm = this.fb.group({
      id: [],
      title: ["", Validators.required],
      alias: [],
      introText: ["", Validators.required],
      fullText: [],
      category: ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.saveDisabled = true;
      this.content.setTitle(this.articleForm.get("title").value);
      this.content.setAlias(this.articleForm.get("alias").value);
      this.content.setIntroText(this.articleForm.get("introText").value);
      this.content.setFullText(this.articleForm.get("fullText").value);
      this.content.setCatId(this.articleForm.get("category").value);
      this.content.setId(this.articleForm.get("id").value);
      this.content.setSate(1);

      this.contentLibService.post(this.content.formData).subscribe(
        data => {
          console.log(data);
          if (data.success === true) {
            alert("Article saved successfully!");
            this.router.navigate([`/article/${data.data.results.id}`]);
            this.saveDisabled = false;
          } else {
            alert(data.err_msg);
          }
        },
        error => {
          console.log(error);
          alert("Error in Article save.");
        }
      );
    } else {
      alert("Invalid form data");
    }
  }
}
