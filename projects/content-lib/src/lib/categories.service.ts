import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CategoriesService {

  limitstart = 0;
  limit = 20;

  constructor(private httpClient: HttpClient, @Inject('env') private env) {}

  get() {
    const url = `${this.env.apiBaseUrl}index.php?option=com_api&app=categories&resource=categories&format=raw&key=${this.env.apiKey}`
    return this.httpClient.get(url).map(data => {
        if (data) {
          return data["data"];
        }
    });
  }
}
