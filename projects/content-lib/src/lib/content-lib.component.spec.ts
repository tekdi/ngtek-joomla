import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLibComponent } from './content-lib.component';

describe('ContentLibComponent', () => {
  let component: ContentLibComponent;
  let fixture: ComponentFixture<ContentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
