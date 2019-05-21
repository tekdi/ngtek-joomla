import { TestBed } from '@angular/core/testing';

import { ContentLibService } from './content-lib.service';

describe('ContentLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentLibService = TestBed.get(ContentLibService);
    expect(service).toBeTruthy();
  });
});
