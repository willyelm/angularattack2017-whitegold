import { TestBed, inject } from '@angular/core/testing';

import { WebStorageService } from './web-storage.service';

describe('WebStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebStorageService]
    });
  });

  it('should ...', inject([WebStorageService], (service: WebStorageService) => {
    expect(service).toBeTruthy();
  }));
});
