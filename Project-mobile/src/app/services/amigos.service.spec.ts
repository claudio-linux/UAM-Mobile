import { TestBed } from '@angular/core/testing';

import { AmigosService } from './amigos.service';

describe('AmigosService', () => {
  let service: AmigosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmigosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
