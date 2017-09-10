import { TestBed, inject } from '@angular/core/testing';

import { CausaService } from './causa.service';

describe('CausaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CausaService]
    });
  });

  it('should be created', inject([CausaService], (service: CausaService) => {
    expect(service).toBeTruthy();
  }));
});
