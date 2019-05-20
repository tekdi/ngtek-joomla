import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
@Injectable()
export class ContentLibService {
  limitstart = 0;
  limit = 20;
  listOrder = "ASC";
  catId = '' ;
  searchText = '';

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    @Inject("env") private env
  ) {}

  getArticle(id) {
    const url = `${this.env.apiBaseUrl}index.php?option=com_api&app=articles&resource=article&format=raw&id=${id}&search=${this.searchText}&category_id=${this.catId}`;
    return this._httpClient.get(url).map(data => {
        if (data) {
            return data["data"]["data"]["results"];
        }
    });
  }

  setCategory(catId) {
    this.catId = catId;
  }

  setSearchText(searchText: string) {
    this.searchText = searchText;
  }

  setLimitStart(limitStart: number) {
    this.limitstart = limitStart;
  }

  setLimit(limit) {
    this.limit = limit;
  }

  setOrdering(listOrder) {
    this.listOrder = listOrder;
  }

  post(formData) {
    const url =
    `${this.env.apiBaseUrl}index.php?option=com_api&app=articles&resource=article&format=raw&key=${this.env.apiKey}`;

    return this._httpClient.post<any>(url, formData).map(data => {
      if (data) {
          return data["data"];
      }
    });
  }
}
