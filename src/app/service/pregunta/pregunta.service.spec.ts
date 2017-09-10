import { TestBed, inject } from '@angular/core/testing';

import { PreguntaService } from './pregunta.service';

describe('PreguntaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreguntaService]
    });
  });

  it('should be created', inject([PreguntaService], (service: PreguntaService) => {
    expect(service).toBeTruthy();
  }));
});
