import { TestBed } from '@angular/core/testing';

import { ItensService } from './itens.service';

describe('ItensService', () => {
  let service: ItensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
