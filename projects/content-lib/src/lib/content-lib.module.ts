import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLibService } from './content-lib.service';
import { ContentLibComponent } from './content-lib.component';
import {HttpClientModule} from '@angular/common/http';
// import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [ContentLibComponent],
  imports: [HttpClientModule,
            // HttpModule
            ],
  exports: [],
    providers : [ContentLibService, HttpClientModule]
})
export class ContentLibModule { }