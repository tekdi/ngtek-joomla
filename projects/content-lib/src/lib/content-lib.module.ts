import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLibService } from './content-lib.service';
import { ContentLibComponent } from './content-lib.component';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

// import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [ContentLibComponent],
  imports: [HttpClientModule,
            // HttpModule
            ],
  exports: [],
    providers : [ContentLibService, HttpClientModule]
})

export class ContentLibModule {

  // tslint:disable-next-line:no-shadowed-variable
  public static forRoot(environment: any): ModuleWithProviders {

    return {
        ngModule: ContentLibModule,
        providers: [
            ContentLibService,
            {
                provide: 'env', // you can also use InjectionToken
                useValue: environment
            }
        ]
    };
  }

 }

