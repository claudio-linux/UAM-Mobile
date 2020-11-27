import { TestBed } from '@angular/core/testing';

import { MetaweatherService } from './metaweather.service';

describe('MetaweatherService', () => {
  let service: MetaweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
