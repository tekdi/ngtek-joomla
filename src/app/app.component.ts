import { Component, Output } from '@angular/core';
import { sanitizeUrl } from '@angular/core/src/sanitization/sanitization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // @Output sanitizeUrl;
  siteUrl = 'http://demo.appcarvers.com/junite';
}
